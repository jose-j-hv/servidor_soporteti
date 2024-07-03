'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_area.belongsTo(models.ubicacion,{
          as: 'ubicacion',
          foreignKey: 'ubicacion_id'
        }
      );
      sub_area.belongsTo(models.area,{
          as: 'area',
          foreignKey: 'area_p_id'
        }
      );
    }
  }
  sub_area.init({
    nombre: DataTypes.STRING,
    uicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ubicacion',
        key: 'id'
      },
    },
    area_p_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'area',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'sub_area',
    timestamps: true,
    freezeTableName: true,
    tableName: 'sub_area'
  });
  return sub_area;
};