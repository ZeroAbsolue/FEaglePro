#FROM node:14.15-alpine

#ENV APP_ROOT /src
#
#RUN mkdir ${APP_ROOT}
#WORKDIR ${APP_ROOT}
#ADD . ${APP_ROOT}
#
##RUN npm install
#RUN npm run dev
#
#EXPOSE 80
#
#ENV HOST 0.0.0.0

FROM node:14.15-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build
RUN npm run generate

# expose 5000 on container
EXPOSE 8080

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=8080

# start the app
CMD [ "npm", "start" ]


