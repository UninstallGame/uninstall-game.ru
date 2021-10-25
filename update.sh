#!/bin/sh
echo "start update"
scp -r ./* srv:/var/www/uninstall-game.ru
echo "update success"
