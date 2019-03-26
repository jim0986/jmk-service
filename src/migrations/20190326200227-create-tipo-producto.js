'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TipoProducto', {
      idTipoProducto: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      tipoProducto: { type: Sequelize.STRING, allowNull: false },
      fechaCreacion: { type: Sequelize.DATE, allowNull: false },
      fechaModificacion: { type: Sequelize.DATE }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('TipoProducto');
  }
};