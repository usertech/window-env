#!/usr/bin/env bash

docker build -t usertech-window-env-example . && docker run --env-file .env -p 8084:80 -it --rm --name usertech-window-env-example usertech-window-env-example
