require('isomorphic-fetch')
require('dotenv').config()

function getTwitchApi(req, res, next) {
  fetch(`https://api.twitch.tv/kraken/streams/?client_id=${process.env.client_id}&client_secret=${process.env.client_secret}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonFetchRes => {
      res.locals.streams = jsonFetchRes;
      next()
    })


}


module.exports = {
  getTwitchApi : getTwitchApi
}
