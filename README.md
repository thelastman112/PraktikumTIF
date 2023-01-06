# Praktikum TIF

## Description
Used to start the Praktikum TIF Project

## Software Requirement
- Nodejs 16
- MySQL 5

## Procedure
1. Download & Prepare
> ### Download the project
> ```bash
> git clone https://github.com/Dzyfhuba/praktikum-tif.git
> ```
> ### Change directory to the project location
> ```bash
> cd praktikum-tif
> ```
2. Setup Back End
> Each procedure at this point must be located in the ```/api``` directory. from the point above, ```cd api``` to change directory to ```praktikum-tif/api```
> ### Install dependencies
> ```bash
> npm install
> ```
> ### Setup environment variables
> ```bash
> cp .env.example .env
> ```
> ### Create new or prepare empty database
> ### Configure variables in ```.env```, make sure it is properly configured
> ### Run migration for create table in your database
> ```bash
> npm run migration:fresh
> ```
> ### Run seeder for create data, if you need sample data
> ```bash
> npm run db:seed
> ```
> ### Start development mode server on port 3333
> ```bash
> npm run dev
> ```
> Don't close/stop/interupt the window/command.
> Open new terminal instead.
3. Setup Front End
> Each procedure at this point must be located in the ```/praktikum-tif``` directory. from the point above, ```cd praktikum-tif``` to change directory to ```praktikum-tif/praktikum-tif```
> ### Install dependencies
> ```bash
> npm install
> ```
> ### Start development mode server on port 3000
> ```bash
> npm start
> ```

## For production mode
By ```npm run build``` and follow the intructions from this command.