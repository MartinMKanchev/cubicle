let express = require('express')
let databaseConfig = require('./config/database')
let expressConfig = require('./config/express')
let routesConfig = require('./config/routes')

async function start(){
let app = express()

await databaseConfig(app)
expressConfig(app)
routesConfig(app)

app.listen(3000, () => console.log('server listening on port 3000'))
}

start()





