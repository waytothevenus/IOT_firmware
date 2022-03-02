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

    # get({key})
    def get(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'error': 'Error: No key provided'
            }
            return json.dumps(response)

        if u'key' in p:
            key = p[u'key']
            if not os.path.exists(STORAGE_FILE + str(key)):
                open(STORAGE_FILE + str(key), 'w').close()
                response = {
                    'message': {'data': ''}
                }
                return json.dumps(response)
            # try:
            # f = open(STORAGE_FILE + str(key), "r")
            # value = f.read()
            # f.close()
            value = json.load(open(STORAGE_FILE + str(key), "r"))
            self.log(value)
            response = {
                'message': value
            }
            # except:
            # response = {
            #     'error': 'Get Error'
            # }
            # return json.dumps(response)
        # response = {
        #     'error': 'Error: Invalid key'
        # }
        return json.dumps(response)

    # set({key, data})
    def set(self, params):
        if DEBUG:
            self.log(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'error': 'Error: key and value must be provided'
            }
            return json.dumps(response)

        if u'key' in p and u'data' in p:
            key = str(p[u'key'])
            data = str(p[u'data'])
            try:
                # Create folder if needed
                if not os.path.exists(TMP_DIR):
                    os.makedirs(TMP_DIR)

                json.dump({'data': data}, open(STORAGE_FILE + key, "w"))
                # f = open(STORAGE_FILE + key, "w")
                # f.write(json.dumps({data: data}))
                # f.close()
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

    def log(self, text):
        print('[Cloud] %s' % text)
        response = {
            'message': 'ok',
        }
        return json.dumps(response)


if __name__ == '__main__':
    api = Api()

    print(api.set({'key': "asdf", 'data': 1234}))
    print(api.get({'key': "asdf"}))
    print(api.set({'key': "a", 'data': "asd"}))
    print(api.set({'key': "a", 'data': "asd"}))
