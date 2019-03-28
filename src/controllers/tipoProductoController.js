const TipoProducto = require('.././models').TipoProducto ;

module.exports = { 
    
    GetTipoProductos(req, res) {
        return TipoProducto
            .findAll()
            //.findAll({ attributes: ['idProducto']})    
            .then(result => res.status(200).send(result))
            .catch( error => { res.status(400).send('errorjim',error,req); }); 
        }
};
