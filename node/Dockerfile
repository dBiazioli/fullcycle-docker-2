FROM node:alpine AS base

FROM base AS deps
WORKDIR /usr/src/node
COPY package.json .
RUN npm install

FROM base AS runner
WORKDIR /usr/src/node
ENV DOCKERIZE_VERSION v0.8.0
RUN apk update --no-cache \
    && apk add --no-cache wget openssl \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apk del wget
COPY ./*.js .
COPY --from=deps /usr/src/node/node_modules ./node_modules
EXPOSE 3000
CMD ["dockerize", "-wait", "tcp://db:3306", "-timeout", "30s", "node", "index.js"]