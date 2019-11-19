require('marko/node-require').install();
require('marko/express');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const rotas = require('../app/rotas/rotas');


const app = express();

//static files
app.use('/estatico', express.static('src/app/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
  }));

rotas(app);

module.exports = app;