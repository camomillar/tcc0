let http = require('http')
let config_express = require('./config/express')
let db = require('./config/database')
const PORT = process.env.PORT || 5000

let app = config_express()
app.listen(PORT, () => console.log(PORT))
/*http.createServer(app)
    .listen(app.get('port'), function(){
        console.log('Server running')
    })*/

db(`mongodb://${process.env.DBUSER}:${process.env.DBPASS}@ds243798.mlab.com:43798/tcc-gamer`)