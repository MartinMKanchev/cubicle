let express = require('express')
let hbs = require('express-handlebars').create({
    extname: '.hbs',
    
})

module.exports = (app) => {
app.engine('.hbs', hbs.engine)
app.set('view engine','.hbs')

app.use(express.urlencoded({extended:true}))
app.use('/static',express.static('static'))
}
