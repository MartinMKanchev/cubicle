let fs = require('fs')



let data = JSON.parse(fs.readFileSync('./models/data.json'))

async function persist() {
    return new Promise((res,rej) => {
        fs.writeFile('./models/data.json',JSON.stringify(data),(err) => {
            if(err == null){
                res()
            }else {
                rej(err)
            }
        })
    })
}

function getAll(){
    return data;
}

function getById(id){
    return data.find(i => i.id == id)
}

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

function getId(){
    return ('000000' + (Math.random() * 999999 | 0).toString(16)).slice(-6);
}


module.exports = {
    getAll,
    getById,
    create
}