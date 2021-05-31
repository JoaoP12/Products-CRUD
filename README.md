# Products CRUD

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

The aim of this project is to simply understand more about frontend and backend connection, as well as learn more about [ReactJS](https://pt-br.reactjs.org/), [ExpressJS](https://expressjs.com/pt-br/) and NoSQL databases using [Google Firebase](https://firebase.google.com/) Firestore.

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites

Just run the command below in the server and client directories of your project.
```
npm install
```

#### Firebase Firestore

Before going ahead, you need to create a firebase project, then add a web app, create a Cloud Firestore database.
After that, you need to create a config.json file within the *server* directory with the config object for your Firebase Service Account and SDK credentials. Further information about it can be found in the [official documentation](https://firebase.google.com/docs/web/setup?hl=en-us).

### Installing

To run the project, it is needed to start the express backend server with

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

![image](https://github.com/JoaoP12/Products-CRUD/blob/master/interface_example.PNG)
and the console running the express server should show this message:
```
> node ./server.js

The server is already running mate
```

## Usage <a name = "usage"></a>

The user interface is very intuitive. When you get to the home page, you will see an unique container with a purple "plus" button with a label "Add product", you can click it and fill up the form to create your product, then hit the submit button to send it to the database.
>Note: the project doesn't have form validation yet, so if you don't fill the forms from create product, empty objects will be created in the DB.

When you create your first product and get back to the home page, you should see something like this:

![image](https://github.com/JoaoP12/Products-CRUD/blob/master/product_container.PNG)

The three buttons in the product container are edit, delete and view product, respectively. If you try to edit your product, don't worry about leaving blank fields, it will be edited just the fields you have filled up.

The button "Home" in the top left side of your page will redirect you to the home page.

## To do

- [ ] Validation when creating and editing product.
    - [ ] Validate fields.
    - [ ] Show message for which fields were filled incorrectly.
    - [ ] Show message and redirect to the home page when the product was edited/created successfully.
- [ ] Implement product search algorithm.
    - [ ] Create search field in home page view.
    - [ ] Implement algorithm to search products that match with the user input.
- [ ] Fix errors appearing on the console.
- [ ] Improve styling.
- [ ] Handle possible backend errors when requesting from frontend.
- [ ] Improve documentation.