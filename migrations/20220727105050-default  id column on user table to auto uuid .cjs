"use strict";
const { fn } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn("users", "id", {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: fn("uuid_generate_v4"),
      allowNull:false
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn("users", "id", {
      type: Sequelize.UUID,
      primaryKey: true,
    });
  },
};
