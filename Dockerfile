FROM node:14.15-alpine

ENV APP_ROOT /usr/src/nuxt-app

# set app port
ENV PORT 80

# create destination directory
RUN mkdir -p ${APP_ROOT}
WORKDIR ${APP_ROOT}

# copy the app, note .dockerignore
COPY . ${APP_ROOT}
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build
# Remplacer generate par dev pour les espaces de developpement
RUN npm run generate

# expose 80 on container
EXPOSE ${PORT}

# start the app
CMD [ "npm", "start" ]
