const db = require("../data/db-config");
module.exports = {
  find,
  add,
  findById,
  findTasksForProject
  // trueFalse
};
function find() {
  return db("projects");
}
function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}
function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(ids => {
      const [id] = ids;

      return findById(id);
    });
}
function findTasksForProject(id) {
  //   select p.project_name, p.description, t.*
  // from tasks as t
  // join projects as p
  // on t.project_id = p.id
  // where p.id = 1;
  return db("tasks as t ")
    .select("p.project_name", "p.description", "t.*")
    .join("projects as p ", "t.project_id", "p.id")
    .where("p.id", id);
}
// function trueFalse(value) {
//   if (value === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
