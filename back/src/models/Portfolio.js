var mongoose = require('mongoose');
var Ticket = require('./../models/Ticket');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var PortfolionSchema = new Schema({
    type: {
      type: Boolean
    },
    name: {
      type: String
    },
    stratDate: {
      type: Date
    },
    startBalance: {
      type: Number
    },
    realBalance: {
      type: Number
    },
    currency: {
      type: String
    },
    tickets:[{
        type:ObjectId,
        ref:'Ticket'
      }]
});

module.exports = mongoose.model("Portfolio",PortfolionSchema);
