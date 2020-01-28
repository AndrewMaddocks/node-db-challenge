exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "gloves", description: "large" },
        { resource_name: "lawn mower", description: "red" },
        {
          resource_name: "power washer",
          description: "large hose goes with it"
        },
        { resource_name: "dyson hair dryer", description: "red" },
        { resource_name: "comb", description: "blue" },
        { resource_name: "wood", description: "at home depot" },
        { resource_name: "hammer", description: "red" }
      ]);
    });
};
