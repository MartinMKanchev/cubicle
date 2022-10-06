let accessoryController = require('express').Router()
let {createAccessories} = require('../services/accessoryService')

accessoryController.get('/', (req,res) => {
    res.render('createAccessory', {
        title: 'Create Accessory'
    })
})

accessoryController.post('/', async (req,res) => {
    console.log(req.body);
    try {
        await createAccessories(req.body)
        res.redirect('attachAccessory')
    } catch (error) {
        console.log(error);
        res.render('createAccessory',{
            title: 'Request Error'
        })
    }
})

module.exports = accessoryController