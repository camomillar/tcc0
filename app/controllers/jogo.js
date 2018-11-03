let Jogo = require('../models/jogo')

module.exports.inserirJogo = function (req, res) {
    let jogo = new Jogo({
        titulo: req.body.titulo
    });

    let promise = Jogo.create(jogo)
    promise.then(
        function (jogo) {
            res.status(201).json({
                _id: jogo._id,
                jogo: usuario.nome
            })
        }
    )
        .catch(
            function (error) {
                res.status(404).send('jogo nao definido');
            }

        )
}

module.exports.getJogos = function (req, res) {
    let promise = Jogo.find()
    promise.then(
        function (jogos) {
            res.status(201).json(jogos)
        }
    )
        .catch(
            function () {
                res.status(404).send('jogos nao encontrado')
            }
        )

}

module.exports.getJogoById = function (req, res) {
    let id = req.params.id
    let promise = Jogo.findById(id);
    promise.then(
        function (jogo) {
            res.status(201).json(jogo)
        }
    )
        .catch(
            function (jogo) {
                res.status(404).send('nao existe')
            }
        )
}

module.exports.getJogoByTitulo = function (req, res) {
    let titulo = req.params.titulo
    let promise = Jogo.findOne(titulo);
    promise.then(
        function (jogo) {
            res.status(201).json(jogo)
        }
    )
        .catch(
            function (jogo) {
                res.status(404).send('nao existe')
            }
        )
}









