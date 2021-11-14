#!/bin/sh
Black='\033[0;30m'
Red='\033[0;31m'
Green='\033[0;32m'
Orange='\033[0;33m'
Blue='\033[0;34m'
Purple='\033[0;35m'
Cyan='\033[0;36m'
Gray='\033[0;37m'

DarkGray='\033[1;30m'
LightRed='\033[1;31m'
LightGreen='\033[1;32m'
Yellow='\033[1;33m'
LightBlue='\033[1;34m'
LightPurple='\033[1;35m'
LightCyan='\033[1;36m'
White='\033[1;37m'

nc='\033[0m'

function colorPrint() {
  if [[ "$1" == "Black" || "$1" == "black" ]]; then
    printBlack "$2"
  elif [[ "$1" == "Red" || "$1" == "red" ]]; then
    printRed "$2"
  elif [[ "$1" == "Green" || "$1" == "green" ]]; then
    printGreen "$2"
  elif [[ "$1" == "Orange" || "$1" == "orange" ]]; then
    printOrange "$2"
  elif [[ "$1" == "Blue" || "$1" == "blue" ]]; then
    printBlue "$2"
  elif [[ "$1" == "Purple" || "$1" == "purple" ]]; then
    printPurple "$2"
  elif [[ "$1" == "Cyan" || "$1" == "cyan" ]]; then
    printCyan "$2"
  elif [[ "$1" == "Gray" || "$1" == "gray" ]]; then
    printGray "$2"
  elif [[ "$1" == "DarkGray" || "$1" == "darkGray" ]]; then
    printDarkGray "$2"
  elif [[ "$1" == "LightRed" || "$1" == "lightRed" ]]; then
    printDarkRed "$2"
  elif [[ "$1" == "LightGreen" || "$1" == "lightGreen" ]]; then
    printDarkGreen "$2"
  elif [[ "$1" == "Yellow" || "$1" == "yellow" ]]; then
    printDarkOrange "$2"
  elif [[ "$1" == "LightBlue" || "$1" == "lightBlue" ]]; then
    printDarkBlue "$2"
  elif [[ "$1" == "LightPurple" || "$1" == "lightPurple" ]]; then
    printDarkPurple "$2"
  elif [[ "$1" == "LightCyan" || "$1" == "lightCyan" ]]; then
    printDarkCyan "$2"
  elif [[ "$1" == "White" || "$1" == "white" ]]; then
    printWhite "$2"
  else
    printRed "Function colorPrint call with wrong first argument. Wrong color argument is: '$1'. Fix it"
  fi
}

function printBlack() {
  echo -e "${Black}$1${nc}"
}

function printRed() {
  echo -e "${Red}$1${nc}"
}

function printGreen() {
  echo -e "${Green}$1${nc}"
}

function printOrange() {
  echo -e "${Orange}$1${nc}"
}

function printBlue() {
  echo -e "${Blue}$1${nc}"
}

function printPurple() {
  echo -e "${Purple}$1${nc}"
}

function printCyan() {
  echo -e "${Cyan}$1${nc}"
}

function printGray() {
  echo -e "${Gray}$1${nc}"
}

function printDarkGray() {
  echo -e "${DarkGray}$1${nc}"
}

function printLightRed() {
  echo -e "${LightRed}$1${nc}"
}

function printLightGreen() {
  echo -e "${LightGreen}$1${nc}"
}

function printYellow() {
  echo -e "${Yellow}$1${nc}"
}

function printLightBlue() {
  echo -e "${LightBlue}$1${nc}"
}

function printLightPurple() {
  echo -e "${LightPurple}$1${nc}"
}

function printLightCyan() {
  echo -e "${LightCyan}$1${nc}"
}

function printWhite() {
  echo -e "${White}$1${nc}"
}

function preview() {
  echo -e "$Black BLACK $nc\t\t | \t $DarkGray DARK GRAY $nc
$Red RED $nc\t\t | \t $LightRed LIGHT RED $nc
$Green GREEN $nc\t\t | \t $LightGreen LIGHT GREEN $nc
$Orange ORANGE $nc\t | \t $Yellow YELLOW $nc
$Blue BLUE $nc\t\t | \t $LightBlue LIGHT BLUE $nc
$Purple PURPLE $nc\t | \t $LightPurple LIGHT PURPLE $nc
$Cyan CYAN $nc\t\t | \t $LightCyan LIGHT CYAN $nc
$Gray LIGHT GRAY $nc\t | \t $White WHITE $nc"
}
