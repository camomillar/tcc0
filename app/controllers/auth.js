let Usuario = require('../models/usuario')
//let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')

module.exports.signin = function (req, res) {
    let promise;
    if (req.body.email.includes("@")) {
        promise = Usuario.findOne({ email: req.body.email });
    } else {
        promise = Usuario.findOne({ gamertag: req.body.email });
    }
    promise.then(
        function (user) {
            // if(bcrypt.compareSync(req.body.senha, user.senha)){
            if (req.body.senha === user.senha) {
                let token = jwt.sign({ id: user._id }, 'camilla_secret')
                console.log(token)
                res.status(200).json({
                    id: user._id,
                    token: token,
                    message: 'Logged',
                    email: user.email,
                    gamertag: user.gamertag
                })
            } else {
                res.status(403).send('Login Invalido')
            }
        }
    ).catch(
        function (err) {
            res.status(401).send('Login Invalido 2!')
            console.log(err)
        }
    )
}

module.exports.verifyToken = function (req, res, next) {
    jwt.verify(req.body.token, 'camilla_secret', function (err, decoded) {
        if (err) {
            res.status(401).json({
                message: "Not authorized"
            })
        } else {
            next()
        }
    })
}