
exports.seed = function(knex) {
  
  //Create a var that contains the name of the table that i'm going to seed with data
  const tableName = "cars"

  //Create an array of rows 
  //It contains an obj for each row I want to insert
  const rows = []

  for (let i=1; i <10; i += 1) {
      let newRow = {
          "vin": `vin${i}`,
          "make": `make${i}`,
          "model": `model${i}`,
          "mileage": `${i}00`,
          "transmission_type": `transmission_type${i}`,
          "title": `title${i}`
      }
       
      rows.push(newRow)
  }
  

  //use the tablename that's defined at the top of this file
  return knex(tableName)
    //Delete ALL of it's records
    .del()
    //THEN insert the array of rows defined above into this same table
    .then(function () 
    {
      return knex.insert(rows).into(tableName)
    });
};
