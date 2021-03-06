const baseRequest = require('./base-request');
const URL = require('url').URL;

module.exports = ($, done) => {
  const url = new URL('/favicon.ico', $.baseUrl).href;
  const reqOptions = {
    method: 'HEAD',
  };

  baseRequest(url, reqOptions, (err, res) => {
    // ignore errors
    if (err) return done(null, []);
    if (res.statusCode !== 200) return done(null, []);

    return done(null, [{
      src: url,
      type: 'image/x-icon',
    }]);
  });
};
