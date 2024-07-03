'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('evidencias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tiket_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'ticket',
          key: 'id'
        }      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      evidencia: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('evidencias');
  }
};