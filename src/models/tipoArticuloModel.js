'use strict';
module.exports = (sequelize, DataTypes) => {
  const tipoArticulo = sequelize.define('m_tipo_articulo', {
    id_tipo_articulo: { type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cod_tipo_articulo: DataTypes.STRING,
    nomb_tipo_articulo: DataTypes.STRING,

    eliminado: DataTypes.BOOLEAN,
    usuario_creacion: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    usuario_modificacion: DataTypes.STRING,
    fecha_modificacion: DataTypes.DATE
  }, {  
  });
  return tipoArticulo;
};