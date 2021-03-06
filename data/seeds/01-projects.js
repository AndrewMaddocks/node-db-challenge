exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "Clean House", completed: "true" },
        { project_name: "Wash Dog", completed: "false" },
        { project_name: "Build a treehouse", completed: "true" }
      ]);
    });
};
