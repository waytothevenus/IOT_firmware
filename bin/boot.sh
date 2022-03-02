#!/bin/sh
# If git doesn't exist, this shouldn't even be here, but start over
if ! command -v git &> /dev/null
then
    echo "-*- Install -*-"
	sudo bash <(curl -s https://raw.githubusercontent.com/lacymorrow/iot-firmware/main/install.sh)
	sudo reboot
fi

# Update
sudo git -C /home/pi/firmware pull

# we don't need node
# If node doesn't exist, we haven't had a first run
# pip3 list | grep webview
if [ -e /home/pi/firmware/.first_run]; then
    echo "-*- First Run -*-"
	sudo bash /home/pi/firmware/bin/first-run.sh
fi

# Initialize hardware
echo "-*- Init -*-"
sudo /home/pi/firmware/bin/init

echo "-*- Startup -*-"
sudo bash /home/pi/firmware/bin/startup.sh
