<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Welcome to my repo :)</p>

## Description

Learning nestjs on [stepik](https://stepik.org/catalog) courses.

## Project setup

```bash
npm install
```

## .env

You should create .env file and write next vars:

```
DATABASE_LOGIN=admin
DATABASE_PASSWORD=admin
DATABASE_HOST=localhost
DATABASE_PORT=27017
DATABASE_AUTHDATABASE=admin
# uri string connection to db
DATABASE_URL=mongodb://admin:admin@localhost:27017/admin
```

## Insomnia

import insomnia-api.json in Insomnia from project root folder, for testing your api

## Compile and run the project

```bash
# development
npm run start

# watch mode
npm run start:dev
```

Don't forget to start database with desktop Docker app, or run

```bash
docker-compose up -d
```

## How to see active dbs

list images

```bash
docker ps
```

take your <your-mongodb-container> id from list above

-it is a flag for 'interactive terminal', bash is the shell we'll use

```bash
docker exec -it <your-mongodb-container> bash
```

your will enter to mongodb shell
`root@example:/# mongo`

switched to db admin

```bash
use admin
```

got 1? ok

```bash
db.auth("username", "password");
```

show dbs list

```bash
show dbs
```

`admin 0.000GB
config 0.000GB
local 0.000GB
mydb 0.000GB`

show collections list

```bash
show collentions
```

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
