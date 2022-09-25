const { create } = require('../services/cubeService')

let router = require('express').Router()



router.get('/create', (req,res) => {
    res.render('create',{
        title: 'Create Cubicle'
    })
})

router.post('/create', async (req,res) => {
    try {
        let result = await create(req.body)
        res.redirect('/')
    } catch (error) {
        res.render('/create',{
            title: 'Request Error'
        })
    }
})

module.exports = router;