
exports.up = function(knex) {
    return knex.schema.hasTable("car")
    .then(function(exists) {
        if (exists) {
            return knex.schema.renameTable("car", "cars")
        }
    })
  
};

exports.down = function(knex) {
    return knex.schema.renameTable("cars", "car")
};
