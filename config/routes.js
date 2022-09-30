let aboutController = require('../controllers/aboutContoller')
let defaultController = require('../controllers/defaultControler')
let broweserContoller = require('../controllers/browserContoller')
let createContoller = require('../controllers/createControler')

module.exports = (app) => {
    app.use(broweserContoller)
    app.use(aboutController)
    app.use(createContoller)
    app.all('*', defaultController)
};