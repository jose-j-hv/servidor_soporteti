'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kpi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kpi.belongsTo({
        as: 'area',
        foreignKey: 'are_ti_id'
      });
    }
  }
  kpi.init({
    nombre: DataTypes.STRING,
    area_ti_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'area',
        key: 'id'
      },
    },
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kpi',
    timestamps: true,
    freezeTableName: true,
    tableName: 'kpi'
  });
  return kpi;
};