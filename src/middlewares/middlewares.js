import jwt from 'jwt-simple'

export const auth = (req, res, next) => {
    console.log('req.header.authorization', req.headers.authorization)
    if(!req.headers.authorization) {
        return res 
                  .status(401)
                  .send({ message: 'No authorized' })
    }
    const token = req.headers.authorization.split(' ')[1]
    const payload = jwt.decode(token, req.app.locals.config.TOKEN)

    req.user = payload.email

    next()
}