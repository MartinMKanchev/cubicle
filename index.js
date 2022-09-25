let express = require('express')
let hbs = require('express-handlebars').create({
    extname: '.hbs',
    
})

let aboutController = require('./controllers/aboutContoller')
let defaultController = require('./controllers/defaultControler')
let broweserContoller = require('./controllers/browserContoller')
let createContoller = require('./controllers/createControler')

let app = express()


app.engine('.hbs', hbs.engine)
app.set('view engine','.hbs')

app.use(express.urlencoded({extended:true}))
app.use('/static',express.static('static'))

app.use(broweserContoller)
app.use(aboutController)
app.use(createContoller)
app.all('*', defaultController)

app.listen(3000, () => console.log('server listening on port 3000'))