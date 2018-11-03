let mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        comentario: {
            type: String
        },
        uid: {
            type: mongoose.Schema.ObjectId,
            ref: 'Usuario'
        },
    })
    return mongoose.model('Comentario', schema)
}();
