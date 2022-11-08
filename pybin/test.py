import re
import json
import ast
import fcntl
import os
import random
import socket
import struct
import subprocess
import sys
import time
import webview

DEBUG = True
TMP_DIR = '/home/pi/iot_tmp/'
STORAGE_FILE = TMP_DIR + '.iot_storage_'


class Api():

    def _get_temp_hum(self):
        # Get temp/humidity from device
        temp = "00"
        hum = "00"
        try:
            result = subprocess.check_output("/home/pi/firmware/drivers/temperhum/temperhum.py --nosymbols", shell=True).decode().strip()
            [temp, hum] = result.split(" ")

            if DEBUG:
                self.log('Temp/Hum: ' + result)
        except:
            temp = "ER"
            hum = "ER"

        return [temp,hum]


    # get({key})

    def get(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == "":
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
                try:
                    response = {
                        'message': ast.literal_eval(value)
                    }
                except:
                    response = {
                        'message': str(value)
                    }
            except:
                # Not set
                response = {
                    'message': ""
                }
        else:
            response = {
                'message': ""
            }
        return json.dumps(response)

    # set({key, data})
    def set(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == "":
            response = {
                'error': 'Error: key and value must be provided'
            }
            return json.dumps(response)

        if DEBUG:
            self.log(p)

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


    def deviceOn(self):
        device = "26"
        try:
            # Use subprocess.check_output if you expect a response
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "write", device, "1"],
                stderr=subprocess.STDOUT
            )

            response = {
                "message": str(process.decode("utf-8"))
            }
        except:
            response = {
                "error": 'Could not turn on device',
            }
        return json.dumps(response)

    
    def deviceOff(self):
        device = "26"
        try:
            # Use subprocess.check_output if you expect a response
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "write", device, "0"],
                stderr=subprocess.STDOUT
            )

            response = {
                "message": str(process.decode("utf-8"))
            }
        except:
            response = {
                "error": 'Could not turn off device',
            }
        return json.dumps(response)

    def deviceStatus(self):
        device = "26"
        try:
            # Use subprocess.check_output if you expect a response
            process = subprocess.check_output(
                ["sudo", "bash", "/home/pi/firmware/bin/util/gpio.sh", "read", device],
                stderr=subprocess.STDOUT
            )

            response = {
                "message": str(process.decode("utf-8"))
            }
        except:
            response = {
                "error": 'Could not read device status',
            }
        return json.dumps(response)

    def log(self, text):
        print('[Cloud] %s' % text)
        response = {
            'message': 'ok',
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


if __name__ == '__main__':
    api = Api()

    print(api.set({'key': "asdf", 'data': 1234}))
    print(api.get({'key': "asdf"}))
    print(api.set({'key': "a", 'data': "asd"}))
    print(api.get({'key': "a"}))
    print(api.set({'key': "a", 'data': "asd"}))
    print(api.get({'key': "a"}))

    print(api.deviceOn())
    print(api.deviceStatus())


