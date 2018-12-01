const { Router } = require('express');
const validator = require('express-joi-validation')({
  passError: true,
});

const { login } = require('./controller');
const { loginSchema } = require('./validationSchama');

const router = new Router();

router.post('/login',
  validator.body(loginSchema),
  login);

module.exports = router;
