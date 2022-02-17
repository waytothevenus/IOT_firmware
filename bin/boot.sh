#!/bin/sh
# command -v foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
# $ type foo >/dev/null 2>&1 || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }
# $ hash foo 2>/dev/null || { echo >&2 "I require foo but it's not installed.  Aborting."; exit 1; }

# If node doesn't exist, we haven't had a first run
if ! command -v node &> /dev/null
then
    echo "-*- First Run -*-"
	sudo bash /home/pi/firmware/bin/first_run.sh
fi

echo "-*- Startup -*-"
sudo bash /home/pi/firmware/bin/startup.sh
