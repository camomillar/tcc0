let mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        comentario: {
            type: String
        },
        gamertag: {
            type:String
        },
        avatar: {
            type: String
        },
        report: {
            type: String
        }
    })
    return mongoose.model('Comentario', schema)
}();
