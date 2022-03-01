#!/bin/sh

network="$(wpa_cli add_network)"
# > 0 # this is the new network's ID
echo "setting network $network to $1"
wpa_cli set_network '$network' ssid '"'$1'"'
# wpa_cli set_network '$network' psk '""'
if [[ ! -z $2 ]]; then
	echo "setting network $network password to $2"
	wpa_cli set_network '$network' psk '"'$2'"'
fi
wpa_cli enable_network '$network'
wpa_cli save_config
wpa_cli -i wlan0 reassociate '$network'
