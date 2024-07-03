'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mes: {
        allowNull: false,
        type: Sequelize.STRING
      },
      inicio: {
        allowNull: true,
        type: Sequelize.DATE
      },
      tiempo_total: {
        allowNull: true,
        type: Sequelize.TIME
      },
      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
      },
      max_tiempo: {
        allowNull: false,
        type: Sequelize.TIME
      },
      ticket_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ticket',
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
    await queryInterface.dropTable('tareas');
  }
};