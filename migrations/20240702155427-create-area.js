'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('areas', {
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
      descripcion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ubicacion_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          mode: 'ubicacion',
          key: 'id'
        },
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
    await queryInterface.dropTable('areas');
  }
};