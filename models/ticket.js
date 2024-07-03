'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/lib/query-types');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ticket.belongsTo(models.tema,{
          as: 'tema',
          foreignKey: 'tema_id'
        }
      );
      ticket.belongsTo(models.usuario,{
          as: 'contacto',
          foreignKey: 'contacto_id'
        });
      ticket.belongsTo(models.ubicacion,{
        as: 'ubicacion',
        foreignKey: 'ubicacion_id'
      });
      ticket.belongsTo(models.area,{
        as: 'area',
        foreignKey: 'area_id'
      });
      ticket.belongsTo(models.sub_are,{
        as: 'sub_area',
        foreignKey: 'sub_area_id'
      });
    }
  }
  ticket.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    tema_id: 
    {type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tema',
        key: 'id'
      },
    },
    contacto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      },
    },
    ubicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ubicacion',
        key: 'id'
      },
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'area',
        key: 'id'
      },
    },
    sub_area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sub_area',
        key: 'id'
      },
    }
  }, 
  {
    sequelize,
    modelName: 'ticket',
    timestamps: true,
    freezeTableName: true,
    tableName: 'ticket'
  });
  return ticket;
};