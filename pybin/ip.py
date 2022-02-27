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


class Api():
    # Usage: get`_ip_address('eth0') -> 192.160.0.110
    def getIpAddress(self):
        process = subprocess.check_output(["hostname", "-I"]).split()[0]
        response = {
            'message': process.decode("utf-8"),
        }
        if DEBUG:
            print('IP: ' + str(response))

        return json.dumps(response)

    def getWifiInfo(self, params):
        info = '000.000.0.0'
        process = subprocess.check_output(
            ["sudo", "iwconfig", "wlan0"])
        info = process.decode("utf-8")
        ssid = re.match(
            'ESSID: "([\w ]+)"', info).group(1)
        quality = re.match(
            'Link Quality=(\d)+', info).group(1)

        response = {
            'message': {
                'ssid': ssid,
                'quality': quality
            }
        }
        return response


if __name__ == '__main__':
    api = Api()

    print(api.getWifiInfo({}))
