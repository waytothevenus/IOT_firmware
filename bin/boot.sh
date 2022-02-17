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

# If node doesn't exist, we haven't had a first run
if ! command -v node &> /dev/null
then
    echo "-*- First Run -*-"
	sudo bash /home/pi/firmware/bin/first-run.sh
fi

echo "-*- Startup -*-"
sudo bash /home/pi/firmware/bin/startup.sh
