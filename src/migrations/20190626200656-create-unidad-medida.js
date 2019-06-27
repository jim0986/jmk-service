'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('m_unidad_medida', {
      id_unidad_medida: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
      cod_unidad_medida: { type: Sequelize.STRING, allowNull: false },
      nomb_unidad_medidad: { type: Sequelize.STRING,allowNull: false },
       //auditory fields
       eliminado: { type: Sequelize.BOOLEAN, allowNull:false, defaultValue: false },
       usuario_creacion: { type: Sequelize.STRING, allowNull:false },
       fecha_creacion: { type: Sequelize.DATE, allowNull:false, defaultValue: Sequelize.literal('NOW()') },
       usuario_modificacion: { type: Sequelize.STRING },
       fecha_modificacion: { type: Sequelize.DATE }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('m_unidad_medida');
  }
};