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
            ["sudo", "iwconfig", "wlan0"]).split()[0]
        info = process.decode("utf-8")
        print(info)
        groups = re.search('ESSID: "([\w ]+)" | Link Quality=(\d)+', info)
        print(groups)

        response = {
            'message': {
                'ssid': groups.group(1),
                'quality': groups.group(2)
            }
        }
        return info


if __name__ == '__main__':
    api = Api()

    print(api.getWifiInfo())
