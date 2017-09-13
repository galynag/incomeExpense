const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require('mongodb').MongoClient;
const app = express();
// const MyEmitter = require('events');
const session = require('express-session');

const favicon = require('serve-favicon');
const path = require('path');
// const ObjectID = require('mongodb').ObjectID;
const fs = require('fs');
// const $ = require('jquery');

// создаем парсер для данных в формате json
// let jsonParser = bodyParser.json();

const PORT = 7700;

const PUBLIC_PATH = __dirname + '/public';

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(PUBLIC_PATH));
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});



app.all("*", function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});

MongoClient.connect( "mongodb://admin:123456@ds135394.mlab.com:35394/moneyway", (err, database) => {
    if (err) return console.log(err);
    else console.log('mongo db done', database);
});