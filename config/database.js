let mongoose = require('mongoose')

module.exports = function(uri){
    mongoose.connect(uri)
    mongoose.connection.on('connected', function(){
        console.log("Mongo DB Conectsdo")
    })
    mongoose.connection.on('disconnected', function(){
        console.log("Fim da conexao com o banco")
    })
    mongoose.connection.on('error', function(erro){
        console.log("Erro na conexao", erro)
    })
    mongoose.set('debug', true)
}