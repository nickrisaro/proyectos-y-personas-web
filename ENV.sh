#!/bin/sh

BASEDIR=`dirname ${BASH_SOURCE[0]} | xargs readlink -f`
cd ${BASEDIR}

export PATH="$BASEDIR/herramientas/node-v12.13.1-linux-x64/bin/:$PATH"