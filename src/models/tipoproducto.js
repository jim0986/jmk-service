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
    // associations can be defined here
  };
  return TipoProducto;
};