'use strict';
module.exports = (sequelize, DataTypes) => {
  const TipoProducto = sequelize.define('TipoProducto', {
    idTipoProducto: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    tipoProducto: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    fechaModificacion: DataTypes.DATE
  }, {
    timestamps: false,
    freezeTableName: true
  });
  TipoProducto.associate = function(models) {
    // TipoProducto.hasMany(models.Producto, { foreignKey: 'idTipoProducto' });
    // si no pongo foreignKey sequilize lo pondria tipoProductoId en el model Producto
  };
  return TipoProducto;
};