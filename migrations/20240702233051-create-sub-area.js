'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sub_areas', {
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
      uicacion_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ubicacion',
          key: 'id'
        },
      },
      area_p_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'area',
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
    await queryInterface.dropTable('sub_areas');
  }
};