const db = require('../db/config')
const halpers = require('../halp.js')


const streamModels = {}

// streamModels.findAll = () => db.query('SELECT * FROM ratings_table')
//
streamModels.findById = id => db.one (`SELECT * FROM ratings_table WHERE streamer_id = $1`,[id])

streamModels.updateLikes = (id) => {
  return db.one(`
  UPDATE ratings_table SET
  likes = likes + 1
  WHERE streamer_id = $1
  RETURNING *`, [id]
)};

streamModels.updateDislikes = (id) => {
  return db.one(`
  UPDATE ratings_table SET
  likes = likes - 1
  WHERE streamer_id = $1
  RETURNING *`, [id]
)};




//
module.exports = streamModels
