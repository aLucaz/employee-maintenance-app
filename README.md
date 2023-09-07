# Employee Maintenance App

This is a minimalistic application designed to streamline the management of essential employee information within an organization. 
<br/>With a primary focus on simplicity and efficiency, this MVP offers the following key features:

1. **View Employee Information**: Quickly access and display fundamental details about employees, including their names, job titles, contact information, and hire dates. This feature provides an at-a-glance overview of the workforce.

2. **Edit Employee Details**: Easily update critical employee information, such as their department and employment status. This functionality allows administrators or authorized personnel 
to make necessary adjustments in real-time.

Designed as a Minimum Viable Product (MVP), this application provides essential functionality to support basic employee management needs. 
<br/>It simplifies the process of viewing and editing employee data while maintaining a user-friendly interface.

For more advanced features and expanded capabilities, future iterations of the Employee Maintenance App can be developed based on specific organizational requirements.

## Client & Server

This repository contains two projects:

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
- Yarn (v1.22.19)

## Patterns used

- Clean code
- SOLID principles
- DRY
- Modularization
- Clean architecture
- Screaming architecture
- DTO
- DRY
- Repository pattern
- Custom hooks

## How to run the app?

*please run it using `docker` to avoid any possible error.*

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

**Important**

- test the app using `http://localhost:3000/`
- test the apis using the [postman file](./resources/postman/collection.json).

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

## How to test?

install dependencies
```shell
yarn install-all
```

run tests of the client
```shell
yarn test:client
```

run tests of the server
```shell
yarn test:server
```

## Stay in touch

- Author 👷🏾‍♂️- [aLucaz](https://github.com/aLucaz)
- Linkedin 🧛🏾‍♂️- [Arturo Lucas](https://www.linkedin.com/in/arturo-lucas/)

