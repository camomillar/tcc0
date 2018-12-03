let Usuario = require('../models/usuario')
let Post = require('../models/post')
// let crypt = require('bcrypt')

module.exports.inserirUsuario = function (req, res) {
    let usuario = new Usuario({
        gamertag: req.body.gamertag,
        email: req.body.email,
        //senha: bcrypt.hashSync(req, body.senha, 10)
        senha: req.body.senha,
        avatar: (Math.floor(Math.random()*5)+1)+'.png'
    });
    let promise = Usuario.create(usuario)
    promise.then(
        function (usuario) {
            res.status(201).json({
                _id: usuario._id,
                gamertag: usuario.gamertag,
                email: usuario.email
            })
        }
    )
        .catch(
            function (error) {
                res.status(404).send('nao existe');
            }

        )
}

module.exports.getUsuarios = function (req, res) {
    let promise = Usuario.find({}, 'email gamertag avatar')
    promise.then(
        function (usuarios) {
            res.status(201).json(usuarios)
        }
    )
        .catch(
            function () {
                res.status(404).send({message: 'nao existe'})
            }
        )

}

module.exports.getUsuarioById = function (req, res) {
    let id = req.params.id
    let promise = Usuario.findById(id);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario)
        }
    )
        .catch(
            function (usuario) {
                res.status(404).send('nao existe')
            }
        )
}

module.exports.removeUsuarioById = function (req, res) {
    let id = req.params.id
    let promise = Usuario.findByIdAndRemove(id);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario)
        }
    )
        .catch(
            function (usuario) {
                res.status(404).send('nao existe')
            }
        )
}

module.exports.updateUsuarioById = function (req, res) {
    let id = req.params.id
    let usuario = {
        gamertag: req.body.gamertag,
        email: req.body.email
    }
    let promise = Usuario.findByIdAndUpdate(id, usuario);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario)
        }
    )
        .catch(
            function (usuario) {
                res.status(404).send('nao existe')
            }
        )
}









