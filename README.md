# Employee Maintenance App

This is a employee maintenance app composed by two applications (client & server).
This project follows good patterns and clean code,
please run it using `docker` to avoid any possible error.

## Client & Server

- [Client Docs](./client/README.md)
- [Server Docs](./server/README.md)

## Technologies used

- Docker
- Make
- React (v18)
- Typescript
- Node.js (v18)
- Express.js
- Postgres

## How to run the app?

using `make`
```shell
make up-all
```

using `docker`
```shell
docker-compose -f docker-compose.yml \
        -f ./server/docker-compose.yml \
        -f ./client/docker-compose.yml \
        up --build -d
```

test the app using `http://localhost:3000/`

## How to remove the app?

using `make`
```shell
make off-all
```

using `docker`
```shell
docker-compose -f docker-compose.yml \
        -f ./server/docker-compose.yml \
        -f ./client/docker-compose.yml \
        down
```

## Stay in touch

- Author 👷🏾‍♂️- [aLucaz](https://github.com/aLucaz)
- Linkedin 🧛🏾‍♂️- [Arturo Lucas](https://www.linkedin.com/in/arturo-lucas/)

