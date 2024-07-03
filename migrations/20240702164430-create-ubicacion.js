'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ubicacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      calle: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CP: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      colonia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      referencias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ubicacions');
  }
};