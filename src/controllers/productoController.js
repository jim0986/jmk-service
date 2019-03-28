const Producto = require('.././models').Producto ;
const TipoProducto = require('.././models').TipoProducto ;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = { 
    
        getProducto(req, res) {
        return Producto
            //.findAll()
            .findAll({ attributes: ['idProducto', 'nombreProducto'],
                    //    include: [{ model: SubCategoria, as: 'sc', }],
                       include: [{ model: TipoProducto, as: 'tp', 
                                    attributes: ['idTipoProducto','tipoProducto'],
                                    where: {idTipoProducto: 1}
                                    //where: {  idTipoProducto: { [Op.or]: [1,3] } }
                                }]     
            })
            .then(result => res.status(200).send(result))
            .catch(error => { res.status(400).send(error); console.log('error custom', error) }); 
        },
        
        getProductoByID(req, res) {
            return Producto                
                .findOne({ attributes: ['idProducto', 'nombreProducto', 'idTipoProducto'],                           
                           where: {  idProducto: req.params.id } })
                .then(result => res.status(200).send({ result: 'success', resultValue: result}))
                .catch(error => { res.status(400).send(error); console.log('error custom', error) }); 
        },

        getProductoAll(req, res) {
            const _page = req.params.page;
            const _limit = req.params.limit;
            const _offset = (_page * _limit) - _limit;
            // console.log('_offset',_offset,'_limit',_limit);
            return Producto                
            .findAndCountAll({ attributes: ['idProducto', 'nombreProducto'],
                                include: [{ model: TipoProducto, as: 'tp', 
                                            attributes: ['idTipoProducto','tipoProducto'],
                                         }],
                                // where: { nombreProducto: { [Op.like]: '%%' } },
                                order: [['nombreProducto', 'ASC']],
                                limit: _limit,
                                offset: _offset           
            })
            .then(result => res.status(200).send({ result: 'success', resultValue: result}))
            .catch(error => { res.status(400).send(error); console.log('error custom', error) }); 
        },
        
        insertProducto(req, res) {
            return Producto
                  .findOne({ where: { nombreProducto: req.body.nombreProducto } })
                  .then(existProd => {
                     if(!existProd) {
                        return Producto.create({
                            nombreProducto: req.body.nombreProducto,
                            idTipoProducto: req.body.idTipoProducto,
                            fechaCreacion: req.body.fechaCreacion                            
                            })
                            .then(result => res.status(200).send({ result: 'success', resultValue: result.nombreProducto}))
                            .catch(errorInst => res.status(400).send({ result: 'Failed', resultValue: errorInst }) )
                     } 
                     res.status(200).send({result: 'Exist', resultValue: existProd.nombreProducto })
                  })
                  .catch(error => { res.status(400).send({ result: 'Failed', resultValue: error }), console.log('error custom', error) })
        },

        updateProducto(req, res) {
            return Producto
                  .findOne({ where: { idProducto: { [Op.ne]: req.params.id }, nombreProducto: req.body.nombreProducto } })
                  .then(existProd => {
                     if(!existProd) {
                        return Producto.update({
                            nombreProducto: req.body.nombreProducto,
                            idTipoProducto: req.body.idTipoProducto,
                            fechaCreacion: req.body.fechaCreacion,
                            fechaModificacion: req.body.fechaModificacion                           
                            }, { where: { idProducto: req.params.id} })
                            .then(result => res.status(200).send({ result: 'success', resultValue: req.body.nombreProducto}))
                            .catch(errorInst => res.status(400).send({ result: 'Failed', resultValue: errorInst }) )
                     } 
                     res.status(200).send({result: 'Exist', resultValue: existProd.nombreProducto })
                  })
                  .catch(error => { res.status(400).send({ result: 'Failed', resultValue: error }), console.log('error custom', error) })
        }
        
};
