var mongoose = require('mongoose');
var Portfolio = require('./../models/Portfolio');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    login: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    token: {
      type: String
    },
    portfolios:[{
        type:ObjectId,
        ref:'Portfolio'
    }]
});

UserSchema.methods = {
    updateToken: function (token) {
        this.token = token;
        return this.save();
    }
}

module.exports = mongoose.model("User",UserSchema);
