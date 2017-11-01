const db = require('../db/config')
const halpers = require('../halp.js')


const streamModels = {}

// streamModels.findAll = () => db.query('SELECT * FROM todo_table')
//
// streamModels.findById = id => db.one ('SELECT * FROM ratings_table WHERE id = $1',[id])

streamModels.updateLike = (like, id) => {
  return db.one(`
  UPDATE ratings_table SET
  like = $1
  WHERE id = $2
  RETURNING *`, [like.like , id]
)};






//
module.exports = streamModels
