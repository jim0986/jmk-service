'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const db = {};
const config = require(__dirname + '/../../config/dbAuth.json')[env];
const sequelize = new Sequelize(config);

// const _articuloModel = require('./articuloModel');
// const _unidadMedidaModel = require('./unidadMedidaModel');

// const articuloModel = _articuloModel(sequelize, Sequelize);
// const unidadMedidaModel = _unidadMedidaModel(sequelize, Sequelize);

// module.exports = {
//   articuloModel,
//   unidadMedidaModel
// };

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
