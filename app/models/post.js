let mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        description: {
            type: String
        },
        likes: {
            type : Number,
            default: 0
        },
        gamertag: {
            type: String
        },
        jogo: {
            type: String,
            ref: 'Jogo'
        },
        imagem: {
            type: String
        },
        violencia: {
            type: String
        }

    });
    
    return mongoose.model('Post', schema)
}();