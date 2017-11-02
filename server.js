const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const logger = require('morgan')
const getTwitchApi = require('./halp.js')

//instantiate app
const app = express();

//config
app.use(methodOverride('_method'))
app.use(logger('dev'))
// app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:false}))

//static config
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));


//views config
app.set('view engine','ejs')
app.set('views', path.join(__dirname,'views'))


//config port
const port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log(`ready on ${port}`)
})

//route requires
const streamRouter = require('./routes/route.js')
app.use('/', streamRouter)

// app.get('/',(req,res)=>{
//   //res.render('view/path')
//
//   res.send('hello from the server')
//   res.send(getTwitchApi)
// })




//catchall
app.get('*',(req,res)=>{
  res.status(404).send('404 not found.')
})
