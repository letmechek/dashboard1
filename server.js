var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
let bodyParser = require('body-parser')
let mongoose =require('mongoose')
let cors = require('cors')
let dotenv = require('dotenv')
let helmet = require('helmet')
let morgan = require('morgan')
var clientRoutes = require('./routes/client');
var generalRoutes = require('./routes/general');
var managementRoutes = require('./routes/management');
var salesRoutes = require('./routes/sales');

require('dotenv').config()
require('./config/database')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan('common'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors());

app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
