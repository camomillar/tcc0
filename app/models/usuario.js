let mongoose = require('mongoose')

module.exports = function(){
    let schema = mongoose.Schema({
        gamertag: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type : String,
            required : true,
            unique: true
        },
        senha: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
        }
    });
    
    return mongoose.model('Usuario', schema)
}();