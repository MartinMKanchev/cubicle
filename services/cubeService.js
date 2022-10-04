let Cube = require('../models/cube')


function getAll(){
    return Cube.find({}).lean()
}

function getById(id){
    return Cube.findById(id).lean()
}

async function create(cubeData){
    let cubeic = {
        name: cubeData.name,
        description: cubeData.description,
        image: cubeData.imageUrl,
        difficultyLevel: Number(cubeData.difficultyLevel)
    }
    
    let missing = Object.entries(cubeic).filter(([k,v]) => !v)
    if (missing.length > 0){
        throw new Error(missing.map(m => `${m[0]} is required`).join('\n'))
    }

    let result = await Cube.create(cubeic)

    return result;
}




module.exports = {
    getAll,
    getById,
    create
}