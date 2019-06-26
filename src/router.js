import productoRoutes from './routes/productoRoutes'
import tipoProductoRoutes from './routes/tipoProductoRoutes'
import articuloRoutes from './routes/articuloRoutes'

export default app => {
    app.use('/producto', productoRoutes )
    app.use('/tipoProducto', tipoProductoRoutes )
    app.use('/articulo', articuloRoutes )
}
