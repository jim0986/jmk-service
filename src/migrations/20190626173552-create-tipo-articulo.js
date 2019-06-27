'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_tipo_articulo', {
      id_tipo_articulo: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      cod_tipo_articulo: { type: Sequelize.STRING(10), allowNull:false },
      nomb_tipo_articulo: { type: Sequelize.STRING(100), allowNull:false },
      //auditory fields
      eliminado: { type: Sequelize.BOOLEAN, allowNull:false, defaultValue: false },
      usuario_creacion: { type: Sequelize.STRING, allowNull:false },
      fecha_creacion: { type: Sequelize.DATE, allowNull:false, defaultValue: Sequelize.literal('NOW()') },
      usuario_modificacion: { type: Sequelize.STRING },
      fecha_modificacion: { type: Sequelize.DATE }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_tipo_articulo');
  }
};