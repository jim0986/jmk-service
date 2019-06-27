'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_articulo', {
      id_articulo: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, allowNull: false },
      id_empresa: { type: Sequelize.INTEGER, allowNull:false },
      id_tipo_articulo: { type: Sequelize.INTEGER, allowNull:false },
      id_categoria_articulo: { type: Sequelize.INTEGER, allowNull:false },
      id_unidad_medida: { type: Sequelize.INTEGER, allowNull:false },
      cod_articulo: { type: Sequelize.STRING(10), allowNull:false },
      nombr_articulo: { type: Sequelize.STRING(150), allowNull:false },
      nomb_articulo_corto: { type: Sequelize.STRING(100), allowNull:false },
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
    return queryInterface.dropTable('m_articulo');
  }
};