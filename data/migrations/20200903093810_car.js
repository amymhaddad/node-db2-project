
exports.up = function(knex, Promise) {
    return knex.schema 
        .createTable("car", function (table) {
            table.increments("id")
            table.string("vin", 200).notNullable(); 
            table.string("make", 200).notNullable(); 
            table.string("model", 200).notNullable(); 
            table.integer("mileage", 200).notNullable().defaultTo(0) 
            table.string("transmission_type", 200)
            table.string("title", 200)
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists("car")
};

