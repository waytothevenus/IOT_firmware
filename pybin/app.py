import json
import os
import random
import sys
import time
import webview

"""
An example of serverless app architecture
"""

DEBUG = True


class Api():
    def __init__(self):
        self.default_variable = False

        self.HW_ID = self._get_hw_id()
        if DEBUG:
            print('Initialized: ' + self.HW_ID)

    def init(self, params):
        response = {
            'message': 'Hello from Python {0}'.format(sys.version)
        }
        return json.dumps(response)

    def _get_hw_id(self):
        # Extract serial from cpuinfo file
        hw_id = "0000000000000000"
        try:
            f = open('/proc/cpuinfo', 'r')
            for line in f:
                if line[0:6] == 'Serial':
                    hw_id = line[10:26]
            f.close()
        except:
            hw_id = "ERROR000000000"

        return hw_id

    def log(self, text):
        print('[Cloud] %s' % text)

    def toggleFullscreen(self):
        webview.windows[0].toggle_fullscreen()


if __name__ == '__main__':
    api = Api()
    webview.create_window('Smartcloud', '/home/pi/firmware/static/test/index.html',
                          js_api=api, min_size=(600, 450))
    webview.start(debug=DEBUG)
