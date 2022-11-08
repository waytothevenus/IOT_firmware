if [[ ! -z $1 ]]; then
	echo "Set GPIO $1 to ON!"
    
    # Exports pin to userspace
    echo $1 > /sys/class/gpio/export                  

    # Sets pin as an output
    echo "out" > "/sys/class/gpio/gpio$1/direction"

    # Sets pin to high
    echo "0" > "/sys/class/gpio/gpio$1/value"
else
	echo "Set GPIO 26 to ON!"
    
    # Exports pin to userspace
    echo "26" > /sys/class/gpio/export                  

    # Sets pin as an output
    echo "out" > "/sys/class/gpio/gpio26/direction"

    # Sets pin to high
    echo "0" > "/sys/class/gpio/gpio26/value"
fi