let Comentario = require('../models/comentario')

module.exports.inserirComentario = function (req, res) {
  let comentario = {
    gamertag: req.body.gamertag,
    avatar: req.body.avatar,
    report: req.body.report,
    comentario: req.body.comentario,
  }
  let promise = Comentario.create(comentario)
  promise.then(
    function (comentario) {
      res.status(201).json(comentario)
    }
  )
    .catch(
      function () {
        res.status(404).send('nao existe')
      }
    )
}

module.exports.getComentarios = function (req, res) {
  let id = req.params._id;
  let promise = Comentario.find({report: id})
  promise.then(
    function (comentario) {
      res.status(201).json(comentario)
    }
  )
    .catch(
      function () {
        res.status(404).send('nao existe')
      }
    )
}
