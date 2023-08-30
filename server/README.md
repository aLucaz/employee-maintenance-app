# Server

This is the server app of the employee maintenance app.
This project follows clean code and clean architecture,
please run it using `docker` to avoid any possible error.

## Technologies used

- Node.js (v18)
- Docker
- Make
- Express.js
- Typescript
- Postgres

## How to run the server?

using `make`
```shell
make up-server
```

using `docker`
```shell
docker-compose -f docker-compose.yml \
                -f ./server/docker-compose.yml \
                up --build -d
```

## How to remove the server?

using `make`
```shell
make off-server
```

using `docker`
```shell
docker-compose -f docker-compose.yml \
                -f ./server/docker-compose.yml \
                down
```

## Stay in touch

- Author 👷🏾‍♂️- [aLucaz](https://github.com/aLucaz)
- Linkedin 🧛🏾‍♂️- [Arturo Lucas](https://www.linkedin.com/in/arturo-lucas/)

