const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

const { redis: { host, port }, session: { secret } } = require('../../config');
const { errorHandler } = require('../../services/error-handler');

module.exports = (apiRoot, routes) => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(session({
    store: new RedisStore({
      host,
      port,
    }),
    secret,
    resave: false,
    saveUninitialized: true,
  }));
  app.use(apiRoot, routes);
  app.use(errorHandler);

  return app;
};
