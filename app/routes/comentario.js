let comentario = require('../controllers/comentario')
let auth = require('../controllers/auth')

module.exports = function (app) {
  app.get('/api/comentarios/:_id', comentario.getComentarios)
  app.post('/api/comentarios', comentario.inserirComentario)
}