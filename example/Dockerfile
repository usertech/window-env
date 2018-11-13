FROM nginx:1.15-alpine

WORKDIR /opt/app

RUN apk add --no-cache curl bash nodejs git make autoconf automake gcc g++ lcms2-dev libpng-dev && rm -rf /var/cache/apk/*

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --rc

ENV PATH /root/.yarn/bin:/root/.config/yarn/global/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

COPY package.json yarn.lock /opt/app/
RUN yarn install --pure-lockfile

COPY src /opt/app/src
COPY .neutrinorc.js webpack.config.js /opt/app/

ENV NODE_PATH src

RUN yarn run build

RUN rm -rf /usr/share/nginx/html/* && mv -n /opt/app/build/* /usr/share/nginx/html
COPY config/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

COPY start.sh /opt/app/start.sh
CMD 	["./start.sh"]
