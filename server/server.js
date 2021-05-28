const express = require('express');
const { routes } = require('./src/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", routes);

app.listen(port, () => console.log("The server is already running mate"));