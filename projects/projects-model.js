const db = require("../data/db-config");
module.exports = {
  find,
  add
};
function find() {
  return db("projects");
}
function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(ids => {
      const [id] = ids;

      return findById(id);
    });
}