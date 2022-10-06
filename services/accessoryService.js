let Accessory = require('../models/accessory')

async function getAllAccessories(){
    return Accessory.find({}).lean()
}

function getById(id) {
    return Accessory.findById(id)
}

async function createAccessories(accessory){
    const accessor = {
        name: accessory.name,
        description: accessory.description,
        imageUrl: accessory.imageUrl,
        
    }

    const result = await Accessory.create(accessor)

    return result
}

module.exports = {
    getAllAccessories,
    getById,
    createAccessories
}
