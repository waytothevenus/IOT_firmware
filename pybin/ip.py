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

    def set(self, params):
        if DEBUG:
            print(params)
        p = self.parse_react_json(params)
        print(p)
        if p == '':
            response = {
                'message': ''
            }
            return json.dumps(response)

        if u'key' in p and u'data' in p:
            key = p[u'key']
            print('k: '+key)
            # Write AuthToken to file
            if not os.path.exists(TMP_DIR):
                os.makedirs(TMP_DIR)
            f = open(STORAGE_FILE + str(key), "w")
            f.write(str(p[u'data']))
            f.close()
            response = {
                'message': 'ok'
            }

        else:
            response = {
                'message': 'Error'
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

    print(api.set({'key': 'ASD', 'data': 'hell'}))
