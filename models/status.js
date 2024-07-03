'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      status.belongsTo(models.ticket,{
        as: 'ticket',
        foreignKey: 'ticket_id'
      });
      status.belongsTo(models.usuario,{
        as: 'usuario',
        foreignKey: 'usuario_id'
      });
    }
  }
  status.init({
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ticket',
        key: 'id'
      },
    },
    status: DataTypes.STRING,
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
      model: 'usuario',
      key: 'id'
    },
    },
  }, {
    sequelize,
    modelName: 'status',
    timestamps: true,
    freezeTableName: true,
    tableName: 'status'
  });
  return status;
};