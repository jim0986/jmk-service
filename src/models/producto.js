'use strict';
module.exports = (sequelize, DataTypes) => {
  const producto = sequelize.define('Producto', {
    idProducto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombreProducto: DataTypes.STRING,
    idTipoProducto: DataTypes.INTEGER,
    fechaCreacion: DataTypes.DATE,
    fechaModificacion: DataTypes.DATE
  }, {
    timestamps: false,
    freezeTableName: true,
    id: idProducto
  });
  producto.associate = function(models) {
    
  };
  return producto;
};