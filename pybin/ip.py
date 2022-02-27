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
    def getIpAddress(self, params):
        if DEBUG:
            print(params)
        ifname = 'wlan0'
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        # try:
        ip = socket.inet_ntoa(fcntl.ioctl(
            s.fileno(),
            0x8915,  # SIOCGIFADDR
            struct.pack('256s', ifname[:15])
        )[20:24])
        response = {
            'message': str(ip)
        }
        # except:
        #     # Error - could not retrieve IP
        #     response = {
        #         'message': 'Could not receive IP address'
        #     }
        if DEBUG:
            print('IP: ' + str(ip))

        return json.dumps(response)


if __name__ == '__main__':
    api = Api()

    print(api.getIpAddress('asd'))
