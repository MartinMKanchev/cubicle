let router = require('express').Router()



router.get('/', (req,res) => {
    res.render('index',{
        title: 'Browser'
    })
})

router.get('/details/:id', (req,res) => {
    res.render('details',{
        title: 'Item Details'
    })
})

module.exports = router;