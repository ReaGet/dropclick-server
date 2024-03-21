const { Sequelize } = require('sequelize');

const getSequelize = (config) => {
  console.log(config)
  return new Sequelize(config);
};
module.exports = getSequelize;