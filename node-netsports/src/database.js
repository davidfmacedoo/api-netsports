const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-netsports', 'aluno', 'aluno', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;