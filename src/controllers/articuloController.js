const Articulo = require('.././models').m_articulo;
const UnidadMedida = require('.././models').m_unidad_medida ;
const CategoriaArticulo = require('.././models').m_categoria_articulo ;
const TipoArticulo = require('.././models').m_tipo_articulo ;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = { 
    
        obtenerArticuloPorId(req, res) {
            return Articulo                
                .findOne({ // attributes: ['id_articulo', 'id_empresa'],
                           where: {  id_articulo: req.params.id, id_empresa: req.body.id_empresa } })
                .then(result => { 
                        if (!result) {
                             return   res.status(200).send({ result: 'notExist', resultValue: 'Not Exist'})
                        }
                       return res.status(200).send({ result: 'success', resultValue: result})       
                })
                .catch(error => { res.status(400).send(error); console.log('error custom', error) }); 
        },

        obtenerArticuloBusqueda(req, res) {
            const _page = req.params.page;
            const _limit = req.params.limit;
            const _offset = (_page * _limit) - _limit;
            // console.log('_offset',_offset,'_limit',_limit);
            return Articulo                
            .findAndCountAll({  attributes: [  'id_articulo'
                                             , 'cod_articulo'
                                             , 'nombr_articulo'
                                             , 'nomb_articulo_corto'
                                            ],
                                include: [
                                            { model: UnidadMedida, 
                                                attributes: ['id_unidad_medida','cod_unidad_medida'],
                                            },
                                            { model: CategoriaArticulo, 
                                                attributes: ['id_categoria_articulo','nomb_categoria_articulo'],
                                            },
                                            { model: TipoArticulo, 
                                                attributes: ['id_tipo_articulo','nomb_tipo_articulo'],
                                            }
                                        ],
                                where: {   id_empresa: req.body.id_empresa
                                         , eliminado: false
                                         , nombr_articulo: { [Op.like]: '%' + req.body.nombr_articulo + '%' } },
                                order: [['nombr_articulo', 'ASC']],
                                limit: _limit,
                                offset: _offset           
            })
            .then(result => res.status(200).send({ result: 'success', resultValue: result}))
            .catch(error => { res.status(400).send(error); console.log('error custom', error) }); 
        },

        insertarArticulo(req, res) {
            return Articulo
                  .findOne({ where: {  nombr_articulo: req.body.nombr_articulo
                                     , id_empresa: req.body.id_empresa
                                     , eliminado: false } })
                  .then(ArticuloExiste => {
                     if(!ArticuloExiste) {
                        return Articulo.create({
                            id_empresa: req.body.id_empresa,
                            id_tipo_articulo: req.body.id_tipo_articulo,
                            id_categoria_articulo: req.body.id_categoria_articulo,
                            id_unidad_medida: req.body.id_unidad_medida,
                            cod_articulo: req.body.cod_articulo,
                            nombr_articulo: req.body.nombr_articulo,
                            nomb_articulo_corto: req.body.nomb_articulo_corto,
                            foto: req.body.foto,
                            eliminado: false,
                            usuario_creacion: req.body.usuario_creacion,
                            fecha_creacion: Sequelize.literal('NOW()')                            
                            })
                            .then(result => res.status(200).send({ result: 'success', 
                                                                   resultValue: {   id_articulo: result.id_articulo
                                                                                  , nombr_articulo: result.nombr_articulo
                                                                                  , cod_articulo: result.cod_articulo
                                                                                }}))
                            .catch(errorInst => res.status(400).send({ result: 'failed', resultValue: errorInst }) )
                     } 
                     res.status(200).send({result: 'exist', resultValue: ArticuloExiste })
                  })
                  .catch(error => { res.status(400).send({ result: 'failed', resultValue: error }), console.log('error custom', error) })
        },

        editarArticulo(req, res) {
            return Articulo
                  .findOne({ where: {   id_articulo: { [Op.ne]: req.params.id } // [Op.ne] = !=
                                      , nombr_articulo: req.body.nombr_articulo
                                      , id_empresa: req.body.id_empresa
                                      , eliminado: false  
                         } })
                  .then(ArticuloExiste => {
                     if(!ArticuloExiste) {
                        return Articulo.update({
                                id_empresa: req.body.id_empresa,
                                id_tipo_articulo: req.body.id_tipo_articulo,
                                id_categoria_articulo: req.body.id_categoria_articulo,
                                id_unidad_medida: req.body.id_unidad_medida,
                                cod_articulo: req.body.cod_articulo,
                                nombr_articulo: req.body.nombr_articulo,
                                nomb_articulo_corto: req.body.nomb_articulo_corto,
                                foto: req.body.foto,
                                eliminado: false,
                                usuario_modificacion: req.body.usuario_modificacion,
                                fecha_modificacion: Sequelize.literal('NOW()')                               
                                }, { where: { id_articulo: req.params.id, id_empresa: req.body.id_empresa} })
                            .then(result => res.status(200).send({ result: 'success', 
                                                                   resultValue: { id_articulo: req.params.id
                                                                                , nombr_articulo: req.body.nombr_articulo
                                                                                , cod_articulo: req.body.cod_articulo
                                                                            }}))
                            .catch(errorInst => res.status(400).send({ result: 'failed', resultValue: errorInst }) )
                     } 
                     res.status(200).send({result: 'exist', resultValue: ArticuloExiste })
                  })
                  .catch(error => { res.status(400).send({ result: 'failed', resultValue: error }), console.log('error custom', error) })
        },

        desactivarArticulo(req, res) {
            return Articulo
                  .findOne({ where: {   id_articulo: req.params.id 
                                      , id_empresa: req.body.id_empresa
                                    } 
                          })
                  .then(ArticuloExiste => {
                     if(ArticuloExiste) {
                        return Articulo.update({
                                eliminado: true,
                                usuario_modificacion: req.body.usuario_modificacion,
                                fecha_modificacion: Sequelize.literal('NOW()')                               
                                }, { where: { id_articulo: req.params.id, id_empresa: req.body.id_empresa} })
                            .then(result => res.status(200).send({ result: 'success', 
                                                                   resultValue: { id_articulo: req.params.id
                                                                                , nombr_articulo: ArticuloExiste.nombr_articulo
                                                                                , cod_articulo: ArticuloExiste.cod_articulo
                                                                             }}))
                            .catch(errorInst => res.status(400).send({ result: 'failed', resultValue: errorInst }) )
                     } 
                     res.status(200).send({result: 'notExist', resultValue: 'Not Exist' })
                  })
                  .catch(error => { res.status(400).send({ result: 'failed', resultValue: error }), console.log('error custom', error) })
        }
};
