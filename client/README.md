# Client

This is the frontend of the employee maintenance app.

## Technologies used

- Docker
- Make
- React (v18)
- Typescript

## Patterns used

- Clean code
- SOLID principles
- DRY
- Modularization

## How to run the client?

*please run it using `docker` to avoid any possible error.*

using `make`
```shell
make up-client
```

using `docker`
```shell
docker-compose -f docker-compose.yml \
                -f ./client/docker-compose.yml \
                up --build -d
```

test the app using `http://localhost:3000/`

## How to remove the client?

using `make`
```shell
make off-client
```

using `docker`
```shell
docker-compose -f docker-compose.yml \
                -f ./client/docker-compose.yml \
                down
```

## Stay in touch

- Author 👷🏾‍♂️- [aLucaz](https://github.com/aLucaz)
- Linkedin 🧛🏾‍♂️- [Arturo Lucas](https://www.linkedin.com/in/arturo-lucas/)

