require('marko/node-require').install();
require('marko/express');

const session = require('express-session');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
    }));
app.use(session({secret: 'odesempre',saveUninitialized:
    true,resave: true}));
const rotas = require('../app/rotas/rotas');
rotas(app);

app.use('/caminho', express.static('src/app/views'));

module.exports = app;