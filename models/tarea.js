'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tarea.belongsTo(models.usuario,{
        as: 'usuario',
        foreignKey: 'usuario_id'
      });
      tarea.belongsTo(models.ticket,{
        as: 'ticket',
        foreignKey: 'ticket_id'
      });
    }
  }
  tarea.init({
    mes: DataTypes.STRING,
    inicio: DataTypes.DATE,
    tiempo_total: DataTypes.TIME,
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      },
    },
    max_tiempo: DataTypes.TIME,
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ticket',
        key: 'id'
      },
    },
  }, {
    sequelize,
    modelName: 'tarea',
    timestamps: true,
    freezeTableName: true,
    tableName: 'tarea',
  });
  return tarea;
};