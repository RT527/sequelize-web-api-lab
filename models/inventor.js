'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Inventor.init({
    name: DataTypes.STRING,
    invention: DataTypes.STRING,
    year_invented: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventor',
  });
  return Inventor;
};