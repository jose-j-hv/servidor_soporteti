'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resp_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sub_area.belongsTo(models.usuario,
        {
          as: 'usuario',
          foreignKey: 'responsable_id'
        }
      );
      sub_area.belongsTo(models.area,
        {
          as: 'area',
          foreignKey: 'area_id'
        }
      );
    }
  }
  resp_area.init({
    responsable_id: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuario',
      key: 'id'
    },
    area_id: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'area',
      key: 'id'
    },
  }, {
    sequelize,
    modelName: 'resp_area',
    timestamps: true,
    freezeTableName: true,
    tableName: 'resp_area'
  });
  return resp_area;
};