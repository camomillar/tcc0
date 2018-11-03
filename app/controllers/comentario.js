let Comentario = require('../models/comentario')
let Usuario = require('../models/usuario')
let Post = require('../models/post')

module.exports.inserirComentario = function (req, res) {
  let comentario = {
    uid: req.body.uid,
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
  let promise = Comentario.find()
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

module.exports.removeComentarioById = function (req, res) {
  let id = req.params.id
  let promise = Comentario.findByIdAndRemove(id)
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
module.exports.updateComentarioById = function (req, res) {
  let id = req.params.id
  let comentario = {
    uid: req.body.uid,
    comentario: req.body.comentario,
  }
  let promise = Comentario.findByIdAndUpdate(id, comentario)
  promise.then(
    function (comentario) {
      res, status(201).json(comentario)
    }
  )
    .catch(
      function () {
        res.status(404).send('nao existe')
      }
    )
}