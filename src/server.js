const http = require('http');

const express = require('./services/express');
const api = require('./api');
const { env, port, apiRoot } = require('./config');

const app = express(apiRoot, api);
const server = http.createServer(app);


server.listen(port, () => {
  console.log('Express server listening on port: %d, in %s mode', port, env);
});

module.exports = app;
