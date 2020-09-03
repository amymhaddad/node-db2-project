
exports.seed = function(knex) {
    const tableName = "sales"

    const rows = [
        {car_id:1, price: 2900, year: 2010}, 
        {car_id:2, price: 8000, year: 1999}, 
        {car_id:3, price: 5000, year: 1999}, 
        {car_id:4, price: 6040, year: 1980}, 
    ]

    return knex(tableName)
        .del()
        .then(function() {
            return knex.insert(rows).into(tableName)
        })
};
