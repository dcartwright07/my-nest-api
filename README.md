## Description

My Nest application setting up my first API. [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
% npm install
```

## Running the app

```bash
# development
% npm run start

# watch mode
% npm run start:dev

# production mode
% npm run start:prod
```

## Docker Container

Use docker container to setup a test database using postgres. The docker container was setup using:

```
% docker run -d -p 5444:5432 --name my-postgres -e POSTGRES_PASSWORD=password postgres
```
