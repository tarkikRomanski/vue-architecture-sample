#!/bin/sh
echo "run in DEV mode"

yarn install
chmod 777 -R ./node_modules
yarn dev
