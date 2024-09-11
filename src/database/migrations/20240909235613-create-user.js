'use strict';
const User = require("../../models/User.js")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(User.tableName, User.tableAttributes);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');

  }
};
