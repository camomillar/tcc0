let usuario = require('../controllers/usuario')
let auth = require('../controllers/auth')

module.exports= function(app){
    app.post('/api/usuarios/signin',auth.signin)
    app.post('/api/usuarios',usuario.inserirUsuario)
    //app.use('/api/usuarios',auth.verifyToken)
    app.get('/api/usuarios', usuario.getUsuarios)
    app.get('/api/usuarios/:id', usuario.getUsuarioById)
    app.put('/api/usuarios/:id', usuario.updateUsuarioById)
    app.delete('/api/usuarios/:id', usuario.removeUsuarioById)
}