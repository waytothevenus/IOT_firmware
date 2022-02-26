import os
import webview

"""
An example of serverless app architecture
"""


class Api():
    def log(self, text):
        print(text)

    def removeItem(self, item):
        print('Removed item %s' % item)

    def editItem(self, item):
        print('Edited item %s' % item)

    def toggleItem(self, item):
        print('Toggled item %s' % item)

    def toggleFullscreen(self):
        webview.windows[0].toggle_fullscreen()


if __name__ == '__main__':
    api = Api()
    webview.create_window('Todos magnificos',
                          'assets/index.html', js_api=api, min_size=(600, 450))
    webview.start()
