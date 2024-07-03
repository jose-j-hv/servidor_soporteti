'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      area.belongsTo(models.ubicacion,
        {
          as: 'ubicacon',
          foreignKey: 'ubicacion_id'
        }
      );
    }
  }
  area.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    ubicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'ubicacion',
        key: 'id'
      },
    }
  }, {
    sequelize,
    modelName: 'area',
    timestamps: true,
    freezeTableName: true,
    tableName: 'area',
  });
  return area;
};