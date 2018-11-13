#!/usr/bin/env bash

yarn window-env-envsubst /usr/share/nginx/html/index.html

nginx -g "daemon off;"
