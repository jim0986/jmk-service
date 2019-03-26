// import user from './routes/me'
import producto from './routes/productoRoutes'
// import auth from './routes/auth'

export default app => {
    // app.use('/auth', auth )
    // app.use('/me', user )    
    app.use('/producto', producto )
}