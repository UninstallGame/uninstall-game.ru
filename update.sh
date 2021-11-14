#!/bin/sh
source ./colors.sh

preview
printGreen "start update"
scp -r ./* srv:/var/www/uninstall-game.ru
printGreen "update success"
