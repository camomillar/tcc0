let comentario = require('../controllers/comentario')
let auth = require('../controllers/auth')

module.exports = function (app) {
  app.use('/api/comentarios', auth.verifyToken)
  app.get('/api/comentarios', comentario.getComentarios)
  app.post('/api/comentarios', comentario.inserirComentario)
  app.delete('/api/comentarios/:id', comentario.removeComentarioById)
  app.put('/api/comentarios/:id', comentario.updateComentarioById)
}