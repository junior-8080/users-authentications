"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("users", {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        data: {
          type: Sequelize.JSON,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.CHAR,
        },
        createdAt: {
          type: Sequelize.DATE,
          defaultValue:Sequelize.NOW
        },
        updatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
      
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("users");
  },
};
