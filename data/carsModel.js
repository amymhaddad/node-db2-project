const db = require("./dbConfig")

module.exports = {
    get, 
    insert, 
    getById
}

function get() {
    return db("cars")
}

function getById(id) {
    return db("cars")
    .where({id})
    .first()
}

function insert(newCar){
    return db("cars")
     .insert(newCar)
     .then(car => {
         return getById(car[0])
     })
}
