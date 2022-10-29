'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('smartwaste', { 
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    sensor_id: {
      type: Sequelize.STRING,
      allowNull: false
    },
    dist: {
      type: Sequelize.STRING,
      allowNull: false
    },
    capacity: {
      type: Sequelize.STRING,
      allowNull: false
    },
    vol: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false
    }
   });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('smartwaste');
  }
};
