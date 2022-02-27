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

    def checkWifiConnection(self, params):
        process = subprocess.check_output(
            ["sudo", "bash", "/home/pi/bin/check_wifi_wget.sh"],
            stderr=subprocess.STDOUT,
            shell=True
        )
        response = {
            'message': str(process),
        }
        return json.dumps(response)


if __name__ == '__main__':
    api = Api()

    print(api.checkWifiConnection({}))
