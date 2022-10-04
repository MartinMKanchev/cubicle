let {Schema,model,Types} = require('mongoose')

let cubeSchema = new Schema({
    name:{type: String},
    description:{type: String},
    image:{type: String},
    difficultyLevel:{type: Number}
})

let Cube = model('cubes', cubeSchema)

module.exports = Cube