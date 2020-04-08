const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'coba'
const client = new MongoClient(url, {
  useUnifiedTopology: true
})
const routes = require("./routes")

client.connect((err) => {
  if(err) {
    console.log('Connection to mongdb failed', err)
  } else { 
    console.log("Successfully connect to mongodb")
    const db = client.db(dbName)

    app.use(express.json())
    app.use(express.urlencoded({extended: false}))

    app.use((req, res, next) => {
      req.db = db
      next()
    })

    app.use('/', routes)
  
    app.listen(3000, () => {
      console.log('Server is running on port ' + PORT)
    })
  }
})





