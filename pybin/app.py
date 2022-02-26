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

    def log(self, text):
        print('[Cloud] %s' % text)

    def getRandomNumber(self, params):
        randNum = random.randint(0, 100000000)
        message = 'Random IO: {0}'.format(randNum)
        response = {
            'message': message
        }
        return json.dumps(response)

    def toggleFullscreen(self):
        webview.windows[0].toggle_fullscreen()


if __name__ == '__main__':
    api = Api()
    # https: // pywebview.flowrl.com/guide/api.html  # webview-create-window
    webview.create_window(
        'Smartcloud',
        url="/home/pi/firmware/static/index.html",
        # url="https://lmorrow.ngrok.io/",
        # url="",
        js_api=api,
        width=640,
        height=350,
        # frameless=True,
        # on_top=False,
        # fullscreen=False,
        resizable=False,
        text_select=False,
        min_size=(320, 240),
        background_color='#F00'
    )
    webview.start(debug=DEBUG, http_server=True)
