exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_name: "pull weeds",
          description: "make sure all are pulled",
          notes: "wear gloves",
          completed: true,
          project_id: 1
        },
        {
          task_name: "mow lawn",
          description: "empty grass frequently",
          notes: "add gass after",
          completed: false,
          project_id: 1
        },
        {
          task_name: "power wash driveway",
          description: "DO NOT LEAVE POWER WASHER ON IF NOT SPRAYING",
          notes: "add gas after",
          completed: false,
          project_id: 1
        },
        {
          task_name: "comb before wash",
          description: "use blue comb",
          notes: "throw away the hair",
          completed: true,
          project_id: 2
        },
        {
          task_name: "wash in bath tub",
          description: "use dog shampoo",
          notes: "wash throughly",
          completed: true,
          project_id: 2
        },
        {
          task_name: "dry ",
          description: "use dyson hair dryer",
          notes: "clean the blown hair as well",
          completed: false,
          project_id: 2
        },
        {
          task_name: "buy wood",
          description: "home depot sells cheap wood",
          notes: "keep receipt",
          completed: true,
          project_id: 3
        },
        {
          task_name: "assemble the house",
          description: "make two windows and a ladder ",
          notes: "make it sturdy!",
          completed: true,
          project_id: 3
        },
        {
          task_name: "safety check",
          description: "go play in it",
          notes: "let kids play in it",
          completed: true,
          project_id: 3
        }
      ]);
    });
};
