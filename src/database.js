const firebase = require('firebase-admin');

const serviceAccount = require('../config.json')

const DB = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

module.exports = DB;

