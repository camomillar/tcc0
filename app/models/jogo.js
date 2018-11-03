let mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        titulo: {
            type: String
        },
    })
    return mongoose.model('Jogo', schema)
}();