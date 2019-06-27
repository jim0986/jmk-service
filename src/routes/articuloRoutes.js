import express from 'express'
const router = express.Router()
const articuloController = require('../controllers').articuloController ; 

router.get('/get/:id', articuloController.obtenerArticuloPorId ); 
router.get('/getAll/:page/:limit', articuloController.obtenerArticuloBusqueda); 
router.post('/post', articuloController.insertarArticulo); 
router.put('/put/:id', articuloController.editarArticulo); 
router.put('/delete/:id', articuloController.desactivarArticulo);
// router.delete('/delete/:id', productoController.deleteProducto); 

export default router