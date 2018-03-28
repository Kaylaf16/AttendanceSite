'use strict';
const express = require('express');
const app = express();
require('dotenv').config();
var morgan = require('morgan');
var path = require('path');
const passport = require('./middlewares/authentication');
const expressSession = require('express-session');

// Enable sessions & passport
app.use(expressSession(({ secret: 'keyboard cat', resave: false, saveUninitialized: true })));
app.use(passport.initialize());
app.use(passport.session());


const bodyParser = require('body-parser');
var handlebars = require('express-handlebars');
 // specifying app engine and templating
app.engine('handlebars', handlebars({
  layoutsDir: path.join(__dirname, "./views/layout"),
  partialsDir: path.join(__dirname, "./views/partials"),
  defaultLayout:'main',
  extname: 'handlebars'}));
 app.set('view engine', 'handlebars');

// console all requests
app.use(morgan('dev'));

// parsing content of the form body
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
// setting views and public folders
app.set('views', path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
 //setting controller routes
var controllers = require('./controllers');
app.use(controllers);

app.listen(process.env.PORT || 8000,function(){
  console.log("Server Running....");
});
