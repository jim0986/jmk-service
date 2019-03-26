'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Producto', {
      idProducto: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      nombreProducto: { type: Sequelize.STRING, allowNull: false },
      idTipoProducto: { type: Sequelize.INTEGER, allowNull: false },
      fechaCreacion: { type: Sequelize.DATE, allowNull: false },
      fechaModificacion: { type: Sequelize.DATE }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Producto');
  }
};