const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    charset: 'utf8mb4', // Usar utf8mb4 pode ajudar com problemas de codificação
  },
  logging: false,
});

module.exports = sequelize;