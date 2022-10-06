const { getAll, getById } = require('../services/cubeService')

let router = require('express').Router()


router.get('/', async (req,res) => {
    let cubes = await getAll()
    console.log(cubes);
    res.render('index',{
        title: 'Browser',
        cubes
    })
})


module.exports = router;