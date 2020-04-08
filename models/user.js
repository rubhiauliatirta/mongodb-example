const { ObjectId } = require("mongodb")

class UserModel {
  static find(db){
    return db.collection("users").find().toArray()
  }

  static findById(db, id){
    return db.collection("users").findOne({_id: ObjectId(id)})
  }
  static create(db, newUser){
    return db.collection("users").insertOne(newUser)
  }
  static findByIdAndUpdate(db, id, updatedData){
    return db.collection("users").updateOne({_id: ObjectId(id)}, {
      $set : updatedData
    })
  }
  static findByIdAndDelete(db, id){
    return db.collection("users").deleteOne({_id: ObjectId(id)})

  }
}

module.exports  = UserModel