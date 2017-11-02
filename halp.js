require('isomorphic-fetch')
require('dotenv').config()
const db = require('./db/config')


function getTwitchApi(req, res, next) {
  fetch(`https://api.twitch.tv/kraken/streams/?limit=10&client_id=${process.env.client_id}&client_secret=${process.env.client_secret}`)
    .then(fetchRes => fetchRes.json())
    .then(jsonFetchRes => {
      // console.log(jsonFetchRes)
      res.locals.streams = jsonFetchRes;


      for(i=0; i<10; i++){
        let streamIdCatcher = jsonFetchRes.streams[i].channel._id
        let streamNameCatcher = jsonFetchRes.streams[i].channel.display_name

        console.log(streamIdCatcher, streamNameCatcher)

        db.query(`
          INSERT INTO ratings_table (
            streamer_id,
            channel_name
          ) VALUES (
            ${streamIdCatcher},
            '${streamNameCatcher}'
          ) ON CONFLICT DO NOTHING
          RETURNING *
          `)
      }

      // db.query(`INSERT INTO`)
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


      for(i=0; i<10; i++){
        let streamIdCatcher = jsonFetchRes.items[i].snippet.channelId
        let streamNameCatcher = jsonFetchRes.items[i].snippet.channelTitle

        console.log(streamIdCatcher, streamNameCatcher)

        db.query(`
          INSERT INTO ratings_table (
            streamer_id,
            channel_name
          ) VALUES (
            ${streamIdCatcher},
            '${streamNameCatcher}'
          ) ON CONFLICT DO NOTHING
          RETURNING *
          `)
      }

    data = jsonFetchRes;
    next()
  })
}





module.exports = {
  getTwitchApi : getTwitchApi,
  getYouTubeApi : getYouTubeApi,
}
