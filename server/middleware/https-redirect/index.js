/**
 * https://github.com/strongloop/loopback-gateway/blob/master/server/middleware/https-redirect/index.js
 * 
 * Create a middleware to redirect http requests to https
 * @param {Object} options Options
 * @returns {Function} The express middleware handler
 */
module.exports = function(options) {
  options = options || {};
  var httpsPort = options.httpsPort || 443;
  return function(req, res, next) {
    if (!req.secure) {
      var parts = req.get('host').split(':');
      var host = parts[0] || '127.0.0.1';
      return res.redirect('https://' + host + ':' + httpsPort + req.url);
    }
    next();
  };
};