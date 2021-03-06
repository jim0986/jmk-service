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
    freezeTableName: true
  });
  producto.associate = function(models) {
    producto.belongsTo(models.TipoProducto, {  foreignKey: 'idTipoProducto', as: 'tp'})
    // si no pongo foreignKey sequilize lo pondria tipoProductoId en el model TipoProducto
  };
  return producto;
};