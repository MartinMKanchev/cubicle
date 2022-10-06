let aboutController = require('../controllers/aboutContoller')
let defaultController = require('../controllers/defaultControler')
let broweserContoller = require('../controllers/browserContoller')
let createContoller = require('../controllers/createControler')
let mainController = require('../controllers/mainContoller')
let accessoryController = require('../controllers/accessoryControler')

module.exports = (app) => {
    app.use(mainController)
    app.use('/createAccessory',accessoryController)
    app.use('/details',broweserContoller)
    app.use(aboutController)
    app.use('/create',createContoller)
    app.all('*', defaultController)
};