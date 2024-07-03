'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ubicacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ubicacion.init({
    nombre: DataTypes.STRING,
    calle: DataTypes.STRING,
    CP: DataTypes.INTEGER,
    colonia: DataTypes.STRING,
    refeencias: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ubicacion',
    timestamps: false,
    freezeTableName: true,
    tableName: 'ubicacion'
  });
  return ubicacion;
};