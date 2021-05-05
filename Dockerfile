
FROM node:14.15-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build
RUN npm run generate

# expose 80 on container
EXPOSE 80

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=80

# start the app
CMD [ "npm", "start" ]

