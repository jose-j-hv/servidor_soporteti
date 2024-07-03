'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.belongsTo(models.usuario,
        {
          as: 'usuario',
          foreignKey: 'create_u_id'
        }
      );
    }
  }
  usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    puesto: DataTypes.STRING,
    password: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    create_u_id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     references: {
      model: 'usuario',
      key: 'id'
     },
    }
  }, {
    sequelize,
    modelName: 'usuario',
    timestamps: true,
    freezeTableName: true,
    tableName: 'usuario'
  });
  return usuario;
};