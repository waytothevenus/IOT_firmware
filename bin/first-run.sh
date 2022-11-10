#!/bin/sh

# Config after getting network

if : >/dev/tcp/8.8.8.8/53; then
	echo 'Internet available.'
	# Install App Dependencies
	sudo apt-get update -y

	sudo apt install -y python3-gi python3-gi-cairo gir1.2-gtk-3.0 gir1.2-webkit2-4.0

	# Communication
	# sudo apt-get install -y samba

	# Browsers
	# sudo apt-get install --no-install-recommends chromium-browser midori

	# Install Node
	# sudo bash /home/pi/firmware/bin/setup/install-node.sh

	# Py dependencies
	sudo bash /home/pi/firmware/bin/setup/pip-install.sh

	touch /home/pi/.first_run

else
	echo 'Offline, not doing first run.'
fi
