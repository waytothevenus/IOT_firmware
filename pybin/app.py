import ast
import json
import fcntl
from logging import info
import os
import random
import re
import socket
import struct
import subprocess
import sys
import time
import webview

# import threading
# import collections

# TODO: Try/catch all the things

"""
The pywebview front facing gui
"""

DEBUG = True
TMP_DIR = '/home/pi/iot_tmp/'
STORAGE_FILE = TMP_DIR + '.iot_storage_'


class Api():
    def _get_hw_id(self):
        # Extract serial from cpuinfo file
        hw_id = "0000000000000000"
        try:
            f = open('/proc/cpuinfo', 'r')
            for line in f:
                if line[0:6] == 'Serial':
                    hw_id = line[10:26]
            f.close()
        except:
            hw_id = "ERROR000000000"

        return hw_id

    def _get_ip_address(self):
        ip = '000.000.0.0'
        try:
            process = subprocess.check_output(["hostname", "-I"]).split()[0]
            ip = process.decode("utf-8")
        except:
            ip = "error"
        return ip

    def __init__(self):
        self.HW_ID = self._get_hw_id()
        # self.IP_ADDRESS = self._get_ip_address()
        if DEBUG:
            self.log('Initialized: ' + self.HW_ID)

    def init(self, params):
        response = {
            "message": 'Hello from Python {0}'.format(sys.version)
        }
        return json.dumps(response)

    # get({key})

    def get(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'error': 'Error: No key provided'
            }
            return json.dumps(response)

        if u'key' in p:
            key = p[u'key']
            try:
                f = open(STORAGE_FILE + str(key), "r")
                value = f.read()
                f.close()
                response = {
                    'message': value
                }
                self.log('Get ' + key + ': ' + value)
            except:
                # Not set
                response = {
                    'message': ''
                }
            return json.dumps(response)
        response = {
            'error': 'Error: Invalid key'
        }
        return json.dumps(response)

    # set({key, data})
    def set(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'error': 'Error: key and value must be provided'
            }
            return json.dumps(response)

        if u'key' in p and u'data' in p:
            key = str(p[u'key'])
            data = str(p[u'data'])
            try:
                # Create folder if needed
                if not os.path.exists(TMP_DIR):
                    os.makedirs(TMP_DIR)
                f = open(STORAGE_FILE + key, "w")
                f.write(data)
                f.close()
                response = {
                    'message': 'ok'
                }
                self.log('Set ' + key + ': ' + data)
            except:
                response = {
                    'error': 'Error: Invalid params'
                }
        else:
            response = {
                'error': 'Set Error'
            }
        return json.dumps(response)

    def getHardwareId(self, params):
        response = {
            "message": self.HW_ID
        }

        if DEBUG:
            self.log('HWID: ' + self.HW_ID)

        return json.dumps(response)

    def getIpAddress(self, params):
        response = {
            "message": self._get_ip_address(),
        }

        if DEBUG:
            self.log('IP: ' + str(response))

        return json.dumps(response)

    def getRandomNumber(self, params):
        randNum = random.randint(0, 100000000)
        message = 'Random IO: {0}'.format(randNum)
        response = {
            "message": message
        }
        return json.dumps(response)

    def getWifiInfo(self, params):
        response = {
            "error": 'getWifiInfo Error'
        }
        try:
            process = subprocess.check_output(
                ["sudo", "iwconfig", "wlan0"])
            info = process.decode("utf-8")

            groups = re.search(
                r'ESSID:"(.+)"[\S\s.]+Link Quality=(\d+)', info)

            if DEBUG:
                self.log('Network: ' + str(groups.group(1)) +
                         ' Quality: ' + str(groups.group(2)))

            response = {
                "message": {
                    'ssid': groups.group(1),
                    'quality': groups.group(2)
                }
            }
            return json.dumps(response)

        except:
            self.log('getWifiInfo Error')
        return info

    def getWifiNetworks(self, params):
        try:
            ps = subprocess.Popen(
                ('sudo', 'iwlist', 'wlan0', 'scan'), stdout=subprocess.PIPE)
            process = subprocess.check_output(
                ('grep', 'ESSID:'), stdin=ps.stdout)
            ps.wait()
            networks = process.decode("utf-8")
            response = {
                "message": str(networks),
            }
        except:
            response = {
                "error": 'Could not list networks',
            }
        return json.dumps(response)

    # Connect to a wifi network

    def setWifiNetwork(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                "error": 'Error: No credentials provided'
            }
            return json.dumps(response)

        if u'ssid' in p and u'password' in p:
            ssid = str(p[u'ssid'])
            password = str(p[u'password'])
            # Use subprocess.check_output if you expect a response
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/connect-wifi-network.sh", ssid, password],
                stderr=subprocess.STDOUT
            )

            response = {
                "message": str(process.decode("utf-8"))
            }
        else:
            response = {
                "message": 'Error: Invalid credentials'
            }
        return json.dumps(response)

    def checkWifiConnection(self, params):
        try:
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/check-network-curl.sh"],
                stderr=subprocess.STDOUT)
            result = str(process.decode("utf-8")).strip('\n')
            if (result != 'true'):
                response = {
                    "error": result,
                }
            else:
                response = {
                    "message": result,
                }
        except:
            response = {
                "error": 'Could not connect',
            }
        return json.dumps(response)

    def log(self, text):
        print('[Cloud] %s' % text)
        response = {
            "message": "ok",
        }
        return json.dumps(response)

    def longTime(self, params):
        time.sleep(15)
        response = {
            "message": "ok"
        }
        return json.dumps(response)

    def parse_react_json(self, react_json):
        try:
            p = ast.literal_eval(react_json)
        except:
            try:
                p = ast.literal_eval(json.dumps(react_json))
            except:
                return ''

        return p

    def removeAllStorage(self, params):
        if DEBUG:
            self.log(params)

        try:
            os.system('find ' + TMP_DIR + ' -mindepth 1 -delete')
        except:
            pass

        response = {
            "message": "ok"
        }
        return json.dumps(response)

    def toggleFullscreen(self):
        webview.windows[0].toggle_fullscreen()

    def update(self, params):
        try:
            # Use subprocess.check_output if you expect a response
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/update.sh"],
                stderr=subprocess.STDOUT
            )

            response = {
                "message": str(process.decode("utf-8"))
            }
        except:
            response = {
                "error": 'Could not update',
            }
        return json.dumps(response)

# wpa_cli - i wlan0 reconfigure


if __name__ == '__main__':
    api = Api()
    api.removeAllStorage({})
    # https: // pywebview.flowrl.com/guide/api.html  # webview-create-window
    webview.create_window(
        'Smartcloud',
        url="/home/pi/firmware/static/index.html",
        js_api=api,
        width=480,
        height=320,
        frameless=True,
        resizable=False,
        text_select=False,
        min_size=(320, 240),
        background_color='#F00'
        # url="",
            # url="https://lmorrow.ngrok.io/",
            # on_top=False,
            # fullscreen=False,
    )
    webview.start(debug=DEBUG, http_server=True)
