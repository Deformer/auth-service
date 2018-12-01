const express = require('express');
const { get } = require('lodash');
const bodyParser = require('body-parser');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const { redis: { host, port }, session: { secret } } = require('../../config');

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
  app.use((err, req, res, next) => {
    const isJoi = get(err, 'error.isJoi', false);
    if (isJoi) {
      res.status(400).json({
        error: err.error.toString(),
      });
    } else {
      // pass on to another error handler
      next(err);
    }
  });

  return app;
};
