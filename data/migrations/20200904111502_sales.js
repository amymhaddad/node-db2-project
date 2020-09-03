
exports.up = function(knex) {
    return knex.schema.createTable("sales", function(table) {
        //PK
        table.increments("id")

        //FK
        table.integer("car_id").notNullable().references("id").inTable("car");

        //Fields
        table.integer("price", 100000).notNullable();
        table.integer("year" ).notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("sales")
};
