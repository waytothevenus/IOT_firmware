#!/bin/sh

PYTHON="$(sudo bash /home/pi/firmware/bin/setup/check-python.sh)"

# If git doesn't exist, this shouldn't even be here, but start over
if ! command -v git &> /dev/null
then
    echo "-*- Install -*-"
	sudo bash <(curl -s https://raw.githubusercontent.com/lacymorrow/iot-firmware/main/install.sh)
	sudo reboot -n
fi

# Update
echo "-*- Update -*-"
sudo git -C /home/pi/firmware pull

# we don't need node
# If node doesn't exist, we haven't had a first run
# pip3 list | grep webview
if [ ! -e /home/pi/.first_run ]; then
    echo "-*- First Run -*-"
	sudo bash /home/pi/firmware/bin/setup/first-run.sh
fi

echo "-*- Startup -*-"
sudo $PYTHON /home/pi/firmware/pybin/test.py
