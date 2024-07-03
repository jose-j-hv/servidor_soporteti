'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kpi_hs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kpi_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'kpi',
          key: 'id'
        }
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      mes: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cumplimiento: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      numero_tickets: {
        allowNull: true,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('kpi_hs');
  }
};