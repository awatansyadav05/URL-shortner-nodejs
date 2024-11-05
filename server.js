const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000

//mongodb connection
//first do the mongodb connection
//copy the ip address from mongodb atlas
//if error print error
//not error show connected
mongoose.connect('mongodb://127.0.0.1:27017/urlShortner')
const db = mongoose.connection;
db.on('error', () => {
  console.log('Error');


})
db.once('open', () => {
  console.log('connected');

})


app.set('view engine', 'ejs') //views are the good folder to create that view format 
app.use(express.static('public')) //public folder created in that we can write css and style format

//data should be refelcted to the terminal
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//for the link router
const urlRouter = require('./routes/urlRoute')
app.use('/', urlRouter)


app.listen(PORT, () => {
  console.log("server is running");

})

