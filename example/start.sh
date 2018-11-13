#!/usr/bin/env bash

yarn web-client-app-env-replace build/index.html

nginx -g "daemon off;"
