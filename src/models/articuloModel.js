'use strict';
module.exports = (sequelize, DataTypes) => {
  const articulo = sequelize.define('m_articulo', {
    id_articulo: { type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    id_empresa: DataTypes.INTEGER,
    id_tipo_articulo: DataTypes.INTEGER ,
    id_categoria_articulo: DataTypes.INTEGER,
    id_unidad_medida: DataTypes.INTEGER ,
    cod_articulo: DataTypes.STRING,
    nombr_articulo: DataTypes.STRING,
    nomb_articulo_corto: DataTypes.STRING,
    foto: DataTypes.STRING,
    
    eliminado: DataTypes.BOOLEAN,
    usuario_creacion: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    usuario_modificacion: DataTypes.STRING,
    fecha_modificacion: DataTypes.DATE
  }, {  
    // timestamps: false, // disable createdAt and updatedAt, current sequelise version defalt value is false
    // freezeTableName: true // disable the automatically pluralized of m_articulo to m_articulos
    // tableName: 'm_articulo' // table name of db if not take the sequelize.define('m_articulo'... .
    // modelName: 'articulo'  // The name of the model. The model will be stored in `sequelize.models` under this name.
                                // This defaults to class name i.e. m_articulo in this case. This will control name of auto-generated
                                // foreignKey and association naming
    //  underescore : true     
         
  });
  articulo.associate = function(models) {
    articulo.belongsTo(models.m_unidad_medida, { foreignKey: 'id_unidad_medida'} );
  };
  // articulo.removeAttribute('id');
  return articulo;
};