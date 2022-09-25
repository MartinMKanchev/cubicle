const { getAll, getById } = require('../services/cubeService')

let router = require('express').Router()



router.get('/', (req,res) => {
    let cubes = getAll()

    res.render('index',{
        title: 'Browser',
        cubes
    })
})

router.get('/details/:id', (req,res) => {
    let cubeId = req.params.id
    let cube = getById(cubeId)

    if(cube){
        res.render('details',{
            title: 'Item Details',
            cube
        })
    }else { 
        res.render('404',{
            title: 'Not Found',
            
        })
    }

    
})

module.exports = router;