let {Schema,model,Types} = require('mongoose')

let cubeSchema = new Schema({
    name:{type: String,required:true},
    description:{type: String,required:true,max: 100},
    image:{type: String,required:true, validate: {
        validator: /^https?/g,
        message: 'Image cube should be a link'}},
    difficultyLevel:{type: Number,required:true,min: 1,max: 6},
    accessories: { type: [Types.ObjectId],default: [], ref:'Accessory'}
})

let Cube = model('cubes', cubeSchema)

module.exports = Cube