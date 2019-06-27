'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoriaArticulo = sequelize.define('m_categoria_articulo', {
    id_categoria_articulo: { type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    cod_categoria_articulo: DataTypes.STRING,
    cod_categoria_articulo_interno: DataTypes.STRING,
    nomb_categoria_articulo: DataTypes.STRING,
    id_categoria_articulo_padre: DataTypes.INTEGER,
    foto: DataTypes.STRING,
    
    eliminado: DataTypes.BOOLEAN,
    usuario_creacion: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    usuario_modificacion: DataTypes.STRING,
    fecha_modificacion: DataTypes.DATE
  }, {  
  });
  return categoriaArticulo;
};