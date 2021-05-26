const express = require('express');
const { routes } = require('./src/routes');

const app = express();
const port = 5000;

app.use(express.json());

app.use("/api", routes);

app.listen(port, () => console.log("The server is already running mate"));