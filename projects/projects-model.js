const db = require("../data/db-config");
module.exports = {
  find,
  add,
  findById
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
// function trueFalse(value) {
//   if (value === 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
