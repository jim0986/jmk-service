import express from 'express'
const router = express.Router()
const productoController = require('../controllers').producto; 
router.get('/get', productoController.GetProductos); 

export default router