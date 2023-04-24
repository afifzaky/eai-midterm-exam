<h1>Midterm Exam EAI</h1>
This RESTful API aims to fulfill midterm exam assignments for EAI courses at Telkom University

<h1>Introduction</h1>
This project is a RESTful API for a simple bootcamp data. The API is built using JavaScript (NodeJS) and Express as the web framework. The database used is MySQL.

<h1>Project Structure</h1>

<b>Config</b> : Contains configuration files for the project, such as database configuration or environment variables.

<b>Controllers</b> : Contains the logic for handling incoming requests and generating responses to those requests.

<b>Middleware</b> : Contains code that is executed between the incoming request and the controller. It can perform tasks such as authentication, logging, or data validation.

<b>Models</b> : Contains the data models for the project. These models define the structure and behavior of the data in the application.

<b>Routes</b> : Contains the routing logic for the application. It defines the URL paths that the application can respond to and maps those paths to specific controllers.

<b>Utils</b> : Contains utility functions and helper classes that can be used throughout the project.

## Create The Project
```sh
npm init
```
## Add Packages
```sh
npm install express mysql body-parser nodemon
```
1. <b>express</b>
This package is simply a node js framework that we will use to make routing easier for us later
2. <b>mysql</b>
This package simply functions to run SQL queries through the functions that we will create later
3. <b>body-parser</b>
This package functions to parse every request that we send via HTTP, whether it's via x-www-form-urlencoded, raw json, and form data.
4. <b>nodemon</b>
Nodemon is a command-line tool that helps with the speedy development of Node. its function is so that it can auto reload the project when we make code/file changes. So we don't have to bother stopping the server and then we run it again every time a file/code changes.

## Add This Script For package.json
```html
  "scripts": {
    "start": "node app",
    "dev": "nodemon app"
  },
```

## CREATE DATABASE AND TABLE
```mysql
CREATE DATABASE your_own_db;
USE DATABASE your_own_db;

CREATE TABLE `bootcamp` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `website` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL
);
```
## Usage
```sh
npm run dev
```
