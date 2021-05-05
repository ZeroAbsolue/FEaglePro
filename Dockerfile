FROM node:14.15-alpine

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run dev

EXPOSE 8080

ENV HOST 0.0.0.0
