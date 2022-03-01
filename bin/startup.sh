#!/bin/sh

PYTHON="$(sudo bash /home/pi/firmware/bin/util/check-python.sh)"

sudo $PYTHON /home/pi/firmware/pybin/app.py
