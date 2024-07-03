'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      mensaje.belongsTo(models.usuario,{
        as: 'usuario',
        foreignKey: 'usuario_id'
      });
      mensaje.belongsTo(models.ticket,{
        as: 'ticket',
        foreignKey: 'ticket_id'
      });
    }
  }
  mensaje.init({
    ticket_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'ticket',
        key: 'id'
      },
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      },
    },
    mensaje: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mensaje',
    timestamps: true,
    freezeTableName: true,
    tableName: 'mensaje',
  });
  return mensaje;
};