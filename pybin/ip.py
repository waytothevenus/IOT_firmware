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
            ["sudo", "bash", "/home/pi/firmware/bin/util/check-network-curl.sh"],
            stderr=subprocess.STDOUT)
        response = {
            'message': str(process),
        }
        return json.dumps(response)


if __name__ == '__main__':
    api = Api()

    print(api.checkWifiConnection({}))
