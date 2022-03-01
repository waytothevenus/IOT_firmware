#!/bin/sh

network="$(wpa_cli add_network)"
echo "setting $network to $1:$2"
# > 0 # this is the new network's ID
wpa_cli set_network '$network' ssid '"'$1'"'
wpa_cli set_network '$network' psk '"'$2'"'
wpa_cli enable_network '$network'
wpa_cli save_config
wpa_cli -i wlan0 reassociate '$network'
