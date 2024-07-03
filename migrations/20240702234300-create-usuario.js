'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      puesto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefono: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      create_u_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};