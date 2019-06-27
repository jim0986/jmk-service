'use strict';
module.exports = (sequelize, DataTypes) => {
  const unidadMedida = sequelize.define('m_unidad_medida', {
    id_unidad_medida: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    cod_unidad_medida: DataTypes.STRING,
    nomb_unidad_medidad: DataTypes.STRING,
    eliminado: DataTypes.BOOLEAN,
    usuario_creacion: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    usuario_modificacion: DataTypes.STRING,
    fecha_modificacion: DataTypes.DATE
  }, {
  }); 
  return unidadMedida;
};