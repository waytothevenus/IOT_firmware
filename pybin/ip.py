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

        groups = re.search(
            r'ESSID:"(.+)"[\S\s.]+Link Quality=(\d+)', info)
        response = {
            'message': {
                'ssid': groups.group(1),
                'quality': groups.group(2)
            }
        }
        return json.dumps(response)


if __name__ == '__main__':
    api = Api()

    print(api.getWifiInfo({}))

a = """
wlan0     IEEE 802.11  ESSID:"The Retreat_Admin"
          Mode:Managed  Frequency:2.462 GHz  Access Point: 84:23:88:64:35:28
          Bit Rate=72.2 Mb/s   Tx-Power=31 dBm
          Retry short limit:7   RTS thr:off   Fragment thr:off
          Power Management:on
          Link Quality=63/70  Signal level=-47 dBm
"""
re.match(
    r'ESSID:"(.+)"[\S\s.]+Link Quality=(\d+)', a).group(1)
