'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kpi_h extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kpi_h.belongsTo(models.kpi,{
        as: 'kpi',
        foreignKey: 'kpi_id'
      });
      kpi_h.belongsTo(models.usuario,{
        as: 'usuario',
        foreignKey: 'usuario_id'
      });
    }
  }
  kpi_h.init({
    kpi_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'kpi',
        key: 'id'
      }
    },
    usuario_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'usuario',
        key: 'id'
      },
    },
    mes: DataTypes.STRING,
    cumplimiento: DataTypes.BOOLEAN,
    numero_tickets: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kpi_h',
    timestamps: true,
    freezeTableName: true,
    tableName: 'kpi_h'
  });
  return kpi_h;
};