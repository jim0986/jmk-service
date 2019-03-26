import express from 'express'
import gConfig from 'config'
import config from './config'
import router from './router'

const httpPort = gConfig.server.httpport;
let _server

const server = {
    start() {
        const app = express()
        config(app)    
        router(app) 
        _server = app.listen(httpPort, () => {
            if (process.env.NODE_ENV !== 'test') {
                console.log(`Server listen on port http://localhost:${httpPort}`)                     
            }            
        })

    },
    close() {
        _server.close()
    }
}

export default server

//este codigo es para si otro fichero lo abre no ejecute el codigo de abajo
if(!module.parent) {
    server.start()
}