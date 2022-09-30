let cube = require('../models/cube')


function getAll(){
    return cube.find({}).lean()
}

function getById(id){
    return cube.findById(id)
}
/*
async function create(cubeData){
    let cube = {
        id: getId(),
        name: cubeData.name,
        description: cubeData.description,
        image: cubeData.image,
        difficultyLevel: Number(cubeData.difficultyLevel)
    }
    data.push(cube)
    await persist()
    
    return cube;
}

*/


module.exports = {
    getAll,
    getById,
}