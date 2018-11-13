#!/usr/bin/env bash

yarn window-env-envsubst build/index.html && nginx -g "daemon off;"
