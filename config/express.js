let express = require('express')
let multer = require('multer')
let bodyParser = require('body-parser')
var path = require('path')
let crypto = require('crypto')


var storage = multer.diskStorage({
    destination: './config/uploads/',
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)
  
        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
  })

var upload = multer({ storage })

const usuario_routes = require('../app/routes/usuario')
const post_routes = require('../app/routes/post')
const jogo_routes = require('../app/routes/jogo')
const comentario_routes = require('../app/routes/comentario')

module.exports = function () {
    let app = express();
    app.set('port', 8080)
    app.use(bodyParser.json({ limit: "50mb" }))
    app.use(bodyParser.urlencoded({ extended: false, limit: '50mb', parameterLimit: 50000 }))
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    usuario_routes(app)
    post_routes(app)
    jogo_routes(app)
    comentario_routes(app)
    app.use('/', express.static(__dirname+'/site'))
    app.use('/public', express.static(__dirname+'/uploads'))
    app.get('/api', function (req, res) {
        res.status(201).send('deu certo')
    })
    app.post('/api/upload', upload.single('screenshot'), function(req, res){
        res.status(201).send({filename: req.file.filename})
    });
    return app
}