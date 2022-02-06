FROM node:12-alpine

# Args
ARG DOCKER_USER=angular
ARG VERSION=1.0.0

RUN  apk update && \
    apk add --no-cache --virtual .gyp make g++ git \
      bash \
      openssl \
	  git \
	  bash \
	  curl \
	  chromium && \
	npm install -g bower && \
	npm install -g yuidocjs && \
	npm install -g @angular/cli

WORKDIR /home

USER ${DOCKER_USER}

ENV CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_PATH=/usr/lib/chromium/

EXPOSE 9222

WORKDIR /home/${DOCKER_USER}


