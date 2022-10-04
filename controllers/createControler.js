const { create } = require('../services/cubeService')

let router = require('express').Router()



router.get('/', (req,res) => {
    res.render('create',{
        title: 'Create Cubicle'
    })
})

router.post('/', async (req,res) => {
    console.log(req.body);
    try {
        let result = await create(req.body)
        res.redirect('/')
    } catch (error) {
        console.log(error);
        res.render('create',{
            title: 'Request Error'
        })
    }
})

module.exports = router;