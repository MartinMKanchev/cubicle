const { getAll, getById } = require('../services/cubeService')

let router = require('express').Router()


router.get('/:id',async (req,res) => {
    let cubeId = req.params.id
    let cube = await getById(cubeId)
    

    if(cube){
        res.render('updatedDetailsPage',{
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