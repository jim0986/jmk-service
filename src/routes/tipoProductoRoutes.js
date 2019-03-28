import express from 'express'
const router = express.Router()
const tipoProductoController = require('../controllers').tipoProducto; 
router.get('/get', tipoProductoController.GetTipoProductos); 

export default router