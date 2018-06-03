/*** server.js using Jon Xie's https setup
  http://www.jonxie.com/blog/2014/11/12/setting-up-loopback-to-use-https-and-ssl-certificates/
 

var loopback = require('loopback');
var boot = require('loopback-boot');

// Load the necessary modules and middleware for HTTPS
var http = require('http');
var https = require('https');
var httpsRedirect = require('./middleware/https-redirect');
var sslCert = require('./ssl/ssl-cert');
var httpsOptions = {
  key: sslCert.privateKey,
  cert: sslCert.certificate
};

// Load middleware for API Explorer
var explorer = require('./middleware/explorer');

// Get an app server instance from LoopBack
var app = module.exports = loopback();

// Set up the /favicon.ico
app.use(loopback.favicon());

// request pre-processing middleware
app.use(loopback.compress());

// -- Add your pre-processing middleware here --

// boot scripts mount components like REST API
boot(app, __dirname);

// Define HTTPS redirect first since order matters when defining middleware
var httpsPort = app.get('https-port');
app.use(httpsRedirect({httpsPort: httpsPort}));

// All middleware and routes defined below and on will be redirected to a HTTPS connection

// Set up API explorer
explorer(app);

// Set up route for `/` to show loopback status for now
app.get('/', loopback.status());

// -- Mount static files here--
// All static middleware should be registered at the end, as all requests
// passing the static middleware are hitting the file system
// Example:
//   var path = require('path');
//   app.use(loopback.static(path.resolve(__dirname, '../client')));

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());

app.start = function() {

  // start the web server
  var port = app.get('port');

  http.createServer(app).listen(port, function() {
    console.log('Web server listening at: %s', 'http://localhost:3000/');
    https.createServer(httpsOptions, app).listen(httpsPort, function() {
      app.emit('started');
      console.log('Web server listening at: %s', app.get('url'));
    });
  });

};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}

***/



/*** server.js attempt using https with Loopback's official docs
// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback-example-ssl
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var loopback = require('loopback');
var boot = require('loopback-boot');

var http = require('http');
var https = require('https');
var sslConfig = require('./ssl-config');

var app = module.exports = loopback();

// boot scripts mount components like REST API
boot(app, __dirname);

app.start = function(httpOnly) {
  if (httpOnly === undefined) {
    httpOnly = process.env.HTTP;
  }
  var server = null;
  if (!httpOnly) {
    var options = {
      key: sslConfig.privateKey,
      cert: sslConfig.certificate,
    };
    server = https.createServer(options, app);
  } else {
    server = http.createServer(app);
  }
  server.listen(app.get('port'), function() {
    var baseUrl = (httpOnly ? 'http://' : 'https://') + app.get('host') + ':' + app.get('port');
    app.emit('started', baseUrl);
    console.log('LoopBack server listening @ %s%s', baseUrl, '/');
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
  return server;
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}
***/



/*** server.js that works on http ***/

  'use strict';

  var loopback = require('loopback');
  var boot = require('loopback-boot');

  var app = module.exports = loopback();

  app.start = function() {
    // start the web server
    return app.listen(function() {
      app.emit('started');
      var baseUrl = app.get('url').replace(/\/$/, '');
      console.log('Web server listening at: %s', baseUrl);
      if (app.get('loopback-component-explorer')) {
        var explorerPath = app.get('loopback-component-explorer').mountPath;
        console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
      }
    });
  };

  // Bootstrap the application, configure models, datasources and middleware.
  // Sub-apps like REST API are mounted via boot scripts.
  boot(app, __dirname, function(err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
      app.start();
  });

