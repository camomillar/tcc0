let jogo = require('../controllers/jogo')
let auth = require('../controllers/auth')

module.exports = function (app) {
  app.use('/api/jogos', auth.verifyToken)
  app.get('/api/jogos', jogo.getJogos)
  app.get('/api/jogos/:id', jogo.getJogoById)
  app.post('/api/jogos', jogo.inserirJogo)
}