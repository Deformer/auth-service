const crypto = require('crypto');

const genRandomString = length => crypto.randomBytes(Math.ceil(length / 2))
  .toString('hex')
  .slice(0, length);

const sha512 = (password, salt) => {
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  return hash.digest('hex');
};

const saltHashPassword = (userpassword) => {
  const salt = genRandomString(16);
  const hash = sha512(userpassword, salt);
  return { salt, hash };
};

const compare = (password, hash, salt) => hash === sha512(password, salt);

module.exports = {
  saltHashPassword,
  compare,
};
