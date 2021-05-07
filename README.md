# FEaglePro

## Build Setup with docker in development
```
docker-compose build && docker-compose up -d
```

## Build Setup with docker in production
```
docker-compose build -f docker-compose-prod.yml && docker-compose up -d
```

## Build Setup without docker

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

#PRODUCTION

```
Nous nous sommes rendus compte que pour deployer en production, le port sur lequel on doit
binder le port réel correspond au port définit dans le fichier nuxt.config.js.
Par exemple avec un dockerfile, on ferait docker run -d -p 80:3000 nomDuContenaire

```
