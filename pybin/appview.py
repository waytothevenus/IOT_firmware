import webview

webview.create_window(
    'SmartCloud', url="/home/pi/firmware/static/test/index.html")

DEBUG = True
webview.start(debug=DEBUG)
