const Sequelize = require('sequelize');

const { sequelize } = require('../../services/postgres');
const { compare } = require('../../services/password-hash');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  passwordHash: Sequelize.STRING,
  passwordSalt: Sequelize.STRING,
  login: {
    type: Sequelize.STRING,
    unique: true,
  },
});

User.prototype.toClient = function () {
  const { id, name, login } = this;
  return ({
    id,
    name,
    login,
  });
};

User.login = ({ login, password }) => User.findOne({ where: { login } }).then((user) => {
  if (!user) {
    // TODO 404
    throw new Error('404');
  }
  const isPasswordCorrect = compare(password, user.passwordHash, user.passwordSalt);
  if (isPasswordCorrect) {
    return user;
  }
  // TODO 400
  throw new Error('400 Wrong credentials');
});

module.exports = User;
