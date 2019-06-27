'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_categoria_articulo', {
      id_categoria_articulo: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      cod_categoria_articulo: { type: Sequelize.STRING(10), allowNull:false },
      cod_categoria_articulo_interno: { type: Sequelize.STRING(10) },
      nomb_categoria_articulo: { type: Sequelize.STRING(100), allowNull:false },
      id_categoria_articulo_padre: { type: Sequelize.INTEGER },
      foto: { type: Sequelize.STRING },
      //auditory fields
      eliminado: { type: Sequelize.BOOLEAN, allowNull:false, defaultValue: false },
      usuario_creacion: { type: Sequelize.STRING, allowNull:false },
      fecha_creacion: { type: Sequelize.DATE, allowNull:false, defaultValue: Sequelize.literal('NOW()') },
      usuario_modificacion: { type: Sequelize.STRING },
      fecha_modificacion: { type: Sequelize.DATE }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_categoria_articulo');
  }
};