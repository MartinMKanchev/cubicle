let {Schema,model,Types: {ObjectId} } = require('mongoose')

let accessoryShema = new Schema({
    name: {type:String, required:true},
    imageUrl: {type:String, required:true, validate: {
        validator: /^https?/g,
        message: 'Image accessory should be a link'
    }},
    description: {type:String,required:true},
    cubes: {type: [ObjectId], default: [], ref: 'Cube'}
})

let Accessory = model('Accessory',accessoryShema)

module.exports = Accessory