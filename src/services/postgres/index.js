const Sequelize = require('sequelize');

const {
  db: {
    host, port, username, password, database,
  },
} = require('../../config');

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect: 'postgres',
});

module.exports = {
  sequelize,
};
