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
        process = subprocess.check_output(
            "hostname --ip-address",
            stderr=subprocess.STDOUT,
            shell=True
        )
        response = {
            'message': str(process),
        }
        if DEBUG:
            print('IP: ' + str(response))

        return json.dumps(response)


if __name__ == '__main__':
    api = Api()

    print(api.getIpAddress())
