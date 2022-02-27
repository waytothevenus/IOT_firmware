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


class Api():

    def getWifiNetworks(self, params):
        networks = 'Error'
        ps = subprocess.Popen(
            ('sudo', 'iwlist', 'wlan0', 'scan'), stdout=subprocess.PIPE)
        print(ps)
        process = subprocess.check_output(
            ('grep', 'ESSID:'), stdin=ps.stdout)
        print(process)
        ps.wait()
        networks = process.decode("utf-8")
        print(networks)
        return networks


if __name__ == '__main__':
    api = Api()

    print(api.getWifiNetworks({}))
