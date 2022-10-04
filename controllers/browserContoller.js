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

router.get('/details/:id',async (req,res) => {
    let cubeId = req.params.id
    let cube = await getById(cubeId)
    

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