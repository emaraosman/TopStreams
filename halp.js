require('isomorphic-fetch')
require('dotenv').config()



function getTwitchApi(req, res, next) {
  fetch(`https://api.twitch.tv/kraken/streams/?limit=10&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonFetchRes => {
      // console.log(jsonFetchRes)
      res.locals.streams = jsonFetchRes;
      data = jsonFetchRes;
      next()
    })

}

function getYouTubeApi(req, res, next) {
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&type=video&regionCode=US&order=viewcount&maxResults=10&key=${process.env.ytkey}`)
  .then(fetchRes => fetchRes.json())
  .then(jsonFetchRes => {
    // console.log(jsonFetchRes)
    res.locals.streams2 = jsonFetchRes;
    data = jsonFetchRes;
    next()
  })
}





module.exports = {
  getTwitchApi : getTwitchApi,
  getYouTubeApi : getYouTubeApi,
}
