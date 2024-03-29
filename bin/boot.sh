#!/bin/sh

PYTHON="$(sudo bash /home/pi/firmware/bin/setup/check-python.sh)"

# we don't need node
# If node doesn't exist, we haven't had a first run
# pip3 list | grep webview
if [ ! -e /home/pi/.first_run ]; then
    echo "-*- First Run -*-"
	sudo bash /home/pi/firmware/bin/setup/first-run.sh
fi

# Allow opening X windows by anyone (allows opening windows from ssh)
export DISPLAY=:0
xhost +

echo "-*- Startup -*-"
sudo $PYTHON /home/pi/firmware/pybin/app.py
