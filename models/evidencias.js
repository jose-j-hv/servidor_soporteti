'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evidencias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      evidencias.belongsTo(models.ticket,{
        as: 'ticket',
        foreignKey: 'ticket_id'
      });
      evidencias.belongsTo(models.usuario,{
        as: 'usuario',
        foreignKey: 'usuaro_id'
      });
    }
  }
  evidencias.init({
    tiket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'ticket',
        key: 'id'
      },
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'usuario',
        key: 'id'
      },
    },
    evidencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'evidencias',
    timestamps: true,
    freezeTableName: true,
    tableName: 'evidencias',
  });
  return evidencias;
};