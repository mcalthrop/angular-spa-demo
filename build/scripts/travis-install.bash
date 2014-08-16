#!/bin/bash -e

SELF=$(basename $0)

echo "$SELF: start"

echo "$SELF: install node packages"
time npm install

echo "$SELF: install bower packages"
time bower install

echo "$SELF: install angular-ui-bootstrap templates"
(
    cd bower_components/angular-ui-bootstrap
    npm install
    grunt default
)

echo "$SELF: finish"
