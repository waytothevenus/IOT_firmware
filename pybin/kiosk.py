import webview
import os
import time
import sys
import random
import subprocess
import socket
import fcntl
import struct
import ast
import json
import threading
import collections
# # Must have DISPLAY set for next one
# from pynput import keyboard
# from PIL import Image, ImageTk
# import Tkinter as tk
# from stored_patterns import LED_Scanner, White_Swell, Rainbow, USA, USA_Swell, Gold_Swell
# from stored_patterns import Vote_1, Vote_2, Vote_3, Vote_4, Vote_5
# from stored_patterns import Pong_Cyan, Pong_Green, Pong_Red, Pong_Blue, Pong_Violet, Pong_Yellow
# from stored_patterns import Cyan_Wave, Green_Wave, Red_Wave, Blue_Wave, Violet_Wave, Yellow_Wave
# from stored_patterns import Inv_Cyan_Wave, Inv_Green_Wave, Inv_Red_Wave, Inv_Blue_Wave, Inv_Violet_Wave, Inv_Yellow_Wave

# AUTHTOKEN_FILE = "/home/pi/hp_tmp/.authtoken"
STORAGE_FILE = "/home/pi/tmp/.iot_storage_"
# HACKPACK_URL = 'https://hackpack-server.herokuapp.com'
# CURRENT_URL = HACKPACK_URL
# # HACKPACK_URL = 'http://10.0.0.31:4000'

# LIGHTSOCKET_PATH = '/dev/lightsocket'
# LIGHTSOCKET_PACKET_LENGTH = 100


DEBUG = True
client = None


# Number of ESCAPE taps in a row to send user URL back to home
CONSECUTIVE_ESCAPE = 3

# Main API class exposed to JS


class Api:
    def __init__(self):
        self.default_variable = False

        self.HW_ID = self._get_hw_id()
        if DEBUG:
            print('HWID: ' + self.HW_ID)

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

    def parse_react_json(self, react_json):
        try:
            p = ast.literal_eval(react_json)
        except:
            try:
                p = ast.literal_eval(json.dumps(react_json))
            except:
                return ''

        return p

    def log(self, message):
        print(message)

    def init(self, params):
        response = {
            'message': 'Hello from Python {0}'.format(sys.version)
        }
        return json.dumps(response)

    def get(self, params):
        if DEBUG:
            print(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'message': ''
            }
            return json.dumps(response)

        if u'key' in p:
            key = p[u'key']
            # Read AuthToken from file
            try:
                f = open(STORAGE_FILE + str(key), "r")
                value = f.read()
                f.close()
                response = {
                    'message': value
                }
            except:
                response = {
                    'message': 'Error'
                }
            return json.dumps(response)
        response = {
            'message': ''
        }
        return json.dumps(response)

    def set(self, params):
        if DEBUG:
            print(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'message': ''
            }
            return json.dumps(response)

        if u'key' in p and u'data' in p:
            key = p[u'key']
            # Write AuthToken to file
            try:
                f = open(STORAGE_FILE + str(key), "w")
                f.write(str(p[u'data']))
                f.close()
                response = {
                    'message': 'ok'
                }
            except:
                response = {
                    'message': ''
                }
        else:
            response = {
                'message': 'Error'
            }
        return json.dumps(response)

    def autoUpdate(self, params):
        # Use subprocess.check_output if you expect a response
        process = subprocess.check_output(
            "sudo /home/pi/bin/auto_update.sh",
            stderr=subprocess.STDOUT,
            shell=True
        )
        response = {
            'message': str(process)
        }
        return json.dumps(response)

    def checkWifiConnection(self, params):
        process = subprocess.check_output(
            "sudo bash /home/pi/bin/check_wifi_wget.sh",
            stderr=subprocess.STDOUT,
            shell=True
        )
        response = {
            'message': str(process),
        }
        return json.dumps(response)

    # def getAuthToken(self, params):
    #     # Read AuthToken from file
    #     try:
    #         f = open(AUTHTOKEN_FILE, "r")
    #         value = f.read()
    #         f.close()
    #         response = {
    #             # 'message': str(process).rstrip()
    #             'message': value.rstrip()
    #         }
    #     except:
    #         response = {
    #             'message': ''
    #         }
    #     return json.dumps(response)

    # def setAuthToken(self, params):
    #     if DEBUG:
    #         print(params)
    #     # Write AuthToken to file
    #     p = self.parse_react_json(params)
    #     if p == '':
    #         response = {
    #             'message': ''
    #         }
    #         return json.dumps(response)

    #     if u'authToken' in p:
    #         f = open(AUTHTOKEN_FILE, "w")
    #         f.write(p[u'authToken'])
    #         f.close()
    #         response = {
    #             'message': 'ok'
    #         }
    #         return json.dumps(response)
    #     else:
    #         response = {
    #             'message': ''
    #         }
    #         return json.dumps(response)

    # Usage: get_ip_address('eth0') -> 192.160.0.110
    def getIpAddress(self, params):
        if DEBUG:
            print(params)
        ifname = 'wlan0'
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        try:
            ip = socket.inet_ntoa(fcntl.ioctl(
                s.fileno(),
                0x8915,  # SIOCGIFADDR
                struct.pack('256s', ifname[:15])
            )[20:24])
            response = {
                'message': str(ip)
            }
        except:
            # Error - could not retrieve IP
            response = {
                'message': '> Could not receive IP address'
            }
        return json.dumps(response)

    def getHardwareId(self, params):
        response = {
            'message': self.HW_ID
        }

        if DEBUG:
            print('HWID' + response + '; ' + params)

        return json.dumps(response)

    # def getSignalMap(self, params):
    #     root = tk.Tk()
    #     img = Image.open(
    #         '/home/pi/hackpack-server/static/images/map-signal.png'
    #     )
    #     tkimage = ImageTk.PhotoImage(img)
    #     tk.Label(root, image=tkimage).pack()
    #     root.mainloop()
    #     response = {
    #         'message': 'ok'
    #     }
    #     return json.dumps(response)

    def getRandomNumber(self, params):
        randNum = random.randint(0, 100000000)
        message = 'Random IO: {0}'.format(randNum)
        response = {
            'message': message
        }
        return json.dumps(response)

    def changeWebView(self, params):
        # Add key 'url' with a URL to change
        global CURRENT_URL
        if DEBUG:
            print(params)
        p = self.parse_react_json(params)
        if p == '':
            response = {
                'message': ''
            }
            return json.dumps(response)

        if u'url' in p:
            CURRENT_URL = p[u'url']
            self.run_lights(18, 3)
            webview.load_url(CURRENT_URL)

            response = {
                'message': 'ok'
            }
        else:
            response = {
                'message': ''
            }
        return json.dumps(response)

    def longTime(self, params):
        time.sleep(15)
        response = {
            'message': 'ok'
        }
        return json.dumps(response)

    # def launchDoom(self, params):
    #     p = subprocess.Popen(
    #         [
    #             "chocolate-doom",
    #             "-iwad",
    #             "/home/pi/Signal2018/Doom/DOOM1.WAD",
    #             "-config",
    #             "/home/pi/hackpack-server/.chocolate-doom-config",
    #             "-extraconfig",
    #             "/home/pi/hackpack-server/.chocolate-doom-extra-config"
    #         ]
    #     )
    #     p.wait()
    #     response = {
    #         'message': 'ok'
    #     }
    #     return json.dumps(response)

    # def launchOpenTTD(self, params):
    #     p = subprocess.Popen(["openttd"])
    #     p.wait()
    #     response = {
    #         'message': 'ok'
    #     }
    #     return json.dumps(response)

# def listen_keys():
#     '''Listen to keyboard triple escape tap to go back.'''
#     try:
#         with keyboard.Listener(
#             on_release=on_release
#         ) as listener:
#             listener.join()
#     except:
#         # No support
#         return


def change_url(api):
    global CURRENT_URL
    time.sleep(30)
    CURRENT_URL = 'https://www.twilio.com'
    api.changeWebView("{u'url': '" + CURRENT_URL + "'}")
    print("Switching to " + CURRENT_URL)


if __name__ == '__main__':
    api = Api()
    # t = threading.Thread(target=listen_keys)
    # t.daemon = True
    # t.start()

    # if DEBUG:
    #     t2 = threading.Thread(target=change_url, args=(api, ))
    #     t2.daemon = True
    #     t2.start()

    # https: // pywebview.flowrl.com/guide/api.html  # webview-create-window
    webview.create_window(
        'IoT Cloud',
        # url="/home/pi/firmware/static/index.html",
        url="https://lmorrow.ngrok.io/",
        js_api=api,
        width=640,
        height=480,
        # frameless=True,
        # on_top=False,
        # fullscreen=False,
        resizable=False,
        text_select=False,
        min_size=(320, 240),
        background_color='#F00'
    )

    webview.start(debug=DEBUG, gui='gtk', http_server=False)
