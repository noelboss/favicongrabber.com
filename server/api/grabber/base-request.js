const request = require('request');

module.exports = request.defaults({
  // follow HTTP 3xx responses as redirects
  followRedirect: true,
  headers: {
    'Accept': '*/*',
    // prevent to redirect to the mobile version of a website
    'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:54.0) Gecko/20100101 Firefox/54.0',
  },
  timeout: 5000,
});
