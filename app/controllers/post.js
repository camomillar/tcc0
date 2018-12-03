let Usuario = require('../models/usuario')
let Post = require('../models/post')
let Jogo = require('../models/jogo')
let Comentario = require('../models/comentario')

module.exports.inserirPost = function(req ,res){

    let post = {
        description: req.body.description,
        gamertag: req.body.gamertag,
        jogo: req.body.jogo,
        imagem: req.body.imagem,
    }
    let promise = Post.create(post)
    promise.then(
        function(post){
            res.status(201).json(post)
        }
    ) 
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}

module.exports.getPosts = function(req, res){
    let promise = Post.find()
    promise.then(
        function(posts){
            res.status(201).json(posts)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}

module.exports.likePost = function(req, res) {
    let id = req.params._id;
    let promise = Post.findByIdAndUpdate(id,{$inc:{likes: 1}},{new: true})
    promise.then(
        function(post){
            res,status(201).json(post)
        }
    )
    .catch(
        function(error){
            res.status(404).json(error)
        }
    )
}

module.exports.getPostById = function(req, res){
    let id = req.params.id
    let promise = Post.findById(id)
    promise.then(
        function(post){
            res,status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}
module.exports.removePostById = function(req, res){
    let id = req.params.id
    let promise = Post.findByIdAndRemove(id)
    peomise.then(
        function(post){
            res.status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}
module.exports.updatePostById = function(req, res){
    let id = req.params.id
    let post ={
        texto: req.body.texto,
        likes: req.body.likes,
        uid: req.body.uid,
        jogo: req.body.jogo,
        comentario: req.body.comentario,
        titulo: req.body.titulo,
        violencia: req.body.violencia,
    }
    let promise = Post.findByIdAndUpdate(id, post, {new: true})
    promise.then(
        function(post){
            res,status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}