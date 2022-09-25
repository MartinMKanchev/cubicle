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

module.exports = {
    getAll,
    getById
}