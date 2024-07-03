'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tema_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'tema',
          key: 'id'
        },
      },
      contacto_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
      },
      ubicacion_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ubicacion',
          key: 'id'
        },
      },
      area_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'area',
          key: 'id'
        },
      },
      sub_area_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sub_area',
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
    await queryInterface.dropTable('tickets');
  }
};