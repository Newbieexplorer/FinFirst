var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var TicketSchema = new Schema({

      type: {
        type: String
      },
      count: {
        type: Number
      }
});

module.exports = mongoose.model("Ticket",TicketSchema);
