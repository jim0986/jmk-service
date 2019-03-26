const Producto = require('.././models').Producto ;

module.exports = { 
    
    GetProductos(req, res) {
        return Producto
            //.findAll()
            .findAll({ attributes: ['idProducto']})    
            .then(result => res.status(200).send(result))
            .catch( error => { res.status(400).send('errorjim',error,req); }); 
        }
};
