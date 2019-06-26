import express from 'express'
const router = express.Router()
const articuloController = require('../controllers').articuloController ; 

// router.get('/get', productoController.getProducto); 
router.get('/get/:id', articuloController.obtenerArticuloPorId ); 
// router.get('/getAll/:page/:limit', productoController.getProductoAll); 
// router.post('/post', productoController.insertProducto); 
// router.put('/put/:id', productoController.updateProducto); 
// router.delete('/delete/:id', productoController.deleteProducto); 

export default router