
exports.up = function(knex) {
    return knex.schema.hasTable("car")
    .then(function(exists) {
        if (exists) {
            return knex.schema.table("car", function(table) {
                table.renameColumn("make", "name")
            })
        }
    })
};

exports.down = function(knex) {
    return knex.schema.table("car", function(table){
        table.renameColumn("name", "make")
    })
}
