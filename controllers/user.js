const User = require("../models/user")

class UserController {
  static find(req, res, next){
    User.find(req.db)
    .then(results => {
      res.status(200).json(results)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
  static findById(req, res, next){
    User.findById(req.db, req.params.id)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
  static create(req, res, next){
    User.create(req.db, req.body)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
  static update(req, res, next){
    User.findByIdAndUpdate(req.db, req.params.id, req.body)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }

  static remove(req, res, next){
    User.findByIdAndDelete(req.db, req.params.id)
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err=> {
      console.log(err)
      res.status(500).json({
        message : "Internal Server Error"
      })
    })
  }
}

module.exports = UserController