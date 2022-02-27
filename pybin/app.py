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

"""
The pywebview front facing gui
"""

DEBUG = True
STORAGE_FILE = "/home/pi/iot_tmp/.iot_storage_"


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
            ip = 'ERROR'
        return ip

    def __init__(self):
        self.HW_ID = self._get_hw_id()
        # self.IP_ADDRESS = self._get_ip_address()
        if DEBUG:
            self.log('Initialized: ' + self.HW_ID)

    def init(self, params):
        response = {
            'message': 'Hello from Python {0}'.format(sys.version)
        }
        return json.dumps(response)

    def get(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'message': ''
            }
            return json.dumps(response)

        if u'key' in p:
            key = p[u'key']
            # Read from file
            try:
                f = open(STORAGE_FILE + str(key), "r")
                value = f.read()
                f.close()
                response = {
                    'message': value
                }
            except:
                response = {
                    'message': 'Error'
                }
            return json.dumps(response)
        response = {
            'message': ''
        }
        return json.dumps(response)

    def set(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'message': ''
            }
            return json.dumps(response)

        if u'key' in p and u'data' in p:
            key = p[u'key']
            # Write AuthToken to file
            try:
                f = open(STORAGE_FILE + str(key), "w")
                f.write(str(p[u'data']))
                f.close()
                response = {
                    'message': 'ok'
                }
            except:
                response = {
                    'message': ''
                }
        else:
            response = {
                'message': 'Error'
            }
        return json.dumps(response)

    def getHardwareId(self, params):
        response = {
            'message': self.HW_ID
        }

        if DEBUG:
            self.log('HWID: ' + self.HW_ID)

        return json.dumps(response)

    def getIpAddress(self, params):
        response = {
            'message': self._get_ip_address(),
        }

        if DEBUG:
            self.log('IP: ' + str(response))

        return json.dumps(response)

    def getRandomNumber(self, params):
        randNum = random.randint(0, 100000000)
        message = 'Random IO: {0}'.format(randNum)
        response = {
            'message': message
        }
        return json.dumps(response)

    def getWifiInfo(self, params):
        info = 'Error'
        try:
            process = subprocess.check_output(
                ["sudo", "iwconfig", "wlan0"])
            info = process.decode("utf-8")

            groups = re.search(
                r'ESSID:"(.+)"[\S\s.]+Link Quality=(\d+)', info)

            response = {
                'message': {
                    'ssid': groups.group(1),
                    'quality': groups.group(2)
                }
            }
            return json.dumps(response)

        except:
            self.log('getWifiInfo Error')
        return info

    def getWifiNetworks(self, params):
        networks = 'Error'
        try:
            ps = subprocess.Popen(
                ('sudo', 'iwlist', 'wlan0', 'scan'), stdout=subprocess.PIPE)
            process = subprocess.check_output(
                ('grep', 'ESSID:'), stdin=ps.stdout)
            ps.wait()
            networks = process.decode("utf-8")
        except:
            self.log('getWifiNetworks Error')
        return networks

    def setWifi(self, ssid, password):
        self.log('set WIFI')

    def autoUpdate(self, params):
        # Use subprocess.check_output if you expect a response
        process = subprocess.check_output(
            "sudo /home/pi/firmware/bin/util/update.sh",
            stderr=subprocess.STDOUT,
            shell=True
        )
        response = {
            'message': str(process)
        }
        return json.dumps(response)

    # def checkWifiConnection(self, params):
    #     process = subprocess.check_output(
    #         "sudo bash /home/pi/bin/check_wifi_wget.sh",
    #         stderr=subprocess.STDOUT,
    #         shell=True
    #     )
    #     response = {
    #         'message': str(process),
    #     }
    #     return json.dumps(response)

    def log(self, text):
        print('[Cloud] %s' % text)

    def longTime(self, params):
        time.sleep(15)
        response = {
            'message': 'ok'
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

    def removeAllTempStorage(self, params):
        if DEBUG:
            self.log(params)

        try:
            os.system('find /home/pi/iot_tmp -mindepth 1 -delete')
        except:
            pass

        response = {
            'message': 'ok'
        }
        return json.dumps(response)

    def toggleFullscreen(self):
        webview.windows[0].toggle_fullscreen()


# wpa_cli - i wlan0 reconfigure

if __name__ == '__main__':
    api = Api()
    # https: // pywebview.flowrl.com/guide/api.html  # webview-create-window
    webview.create_window(
        'Smartcloud',
        url="/home/pi/firmware/static/index.html",
        # url="https://lmorrow.ngrok.io/",
            # url="",
            js_api=api,
            width=640,
            height=350,
            # frameless=True,
            # on_top=False,
            # fullscreen=False,
            resizable=False,
            text_select=False,
            min_size=(320, 240),
            background_color='#F00'
    )
    webview.start(debug=DEBUG, http_server=True)
