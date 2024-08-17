const { DataTypes } = require('sequelize');
const sequelize = require('../config/database').default;

const ProductCategory = sequelize.define('ProductCategory', {
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id'
    },
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'categories',
      key: 'id'
    },
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'product_categories'
});

module.exports = ProductCategory;