import producto from './routes/productoRoutes'
import tipoProducto from './routes/tipoProductoRoutes'

export default app => {
    app.use('/producto', producto )
    app.use('/tipoProducto', tipoProducto )
}
