require('marko/node-require').install();
require('marko/express');

const express = require('express');
const bodyParser = require('body-parser');

const rotas = require('../app/rotas/rotas');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

rotas(app);

module.exports = app;