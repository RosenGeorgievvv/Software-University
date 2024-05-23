const data = require('../../data/catalog.json');

let nextId = 6;

function getParts(){
return data;
}
function getPartById(id){
return data.find(p => p.id == id);
}
function createPart(partData){
const part = {
    id: nextId++,
    name: partData.name,
    price: Number(partData.price),
    description: partData.description
};
data.push(part);
}

module.exports = {
    getParts,
    getPartById,
    createPart
}