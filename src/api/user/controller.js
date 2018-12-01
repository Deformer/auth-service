const User = require('./model');

const create = (req, res, next) => User.create(req.body)
  .then(user => res.status(201).send(user.toClient()))
  .catch(err => next(err));

const login = (req, res, next) => {
  return User.login(req.body)
    .then((user) => {
      req.session.userId = user.id;
      res.status(200).send(user.toClient());
    }).catch(err => next(err));
};

module.exports = {
  create,
  login,
};
