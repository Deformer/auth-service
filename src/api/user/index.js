const { Router } = require('express');

const { login } = require('./controller');

const router = new Router();

router.post('/login', login);

module.exports = router;
