let {Schema,model} = require('mongoose')

let cubeSchema = new Schema({
    name:{type: String,required: true},
    description:{type: String,required: true},
    image:{type: String,required: true},
    difficultyLevel:{type: Number,required: true,min: 1 }
})

let cube = model('cube', cubeSchema)

module.exports = cube