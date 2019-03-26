import producto from './routes/productoRoutes'

export default app => {
    app.use('/producto', producto )
}
