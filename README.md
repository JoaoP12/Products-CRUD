# Products CRUD

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

The aim of this project is to simply understand more about frontend and backend connection, as well as learn more about [ReactJS](https://pt-br.reactjs.org/), [ExpressJS](https://expressjs.com/pt-br/) and NoSQL databases using [Google Firebase](https://firebase.google.com/) Firestore.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

Just run the command below in the server and client directories of your project.
```
npm install
```
#####Firebase Firestore
Before going ahead, you need to create a firebase project, then add a web app, create a Cloud Firestore database.
After that, you need to create a config.json file within the *server* directory with the config object for your Firebase Service Account and SDK credentials. Further information about it can be found [here](https://firebase.google.com/docs/web/setup?hl=en-us).

### Installing

To run the project, it is to run the express backend server with

```
cd ./server/
npm run server
```

and the react server

```
npm start
```
>Note: You need to run the command above inside the *client* directory. And you need to be running both react and express servers simultaneously, otherwise you won't be able to use the program properly.

If everything went well you should see a tab like this in your browser:
![image](./interface_example.png)
and the console running the express server should show this message:
```
> node ./server.js

The server is already running mate
```

## Usage <a name = "usage"></a>

Add notes about how to use the system.
