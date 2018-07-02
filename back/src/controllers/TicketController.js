var express = require('express');
var Ticket = require('./../models/Ticket');
var router = express.Router();


router.get('/ticket/:type',function(req,res){
    const ticketType = req.params.type;
    Ticket.find({type : ticketType},function (err, ticekts){
      if (err)
        return console.error(err);
      else {
          res.send(ticekts);
          console.log(ticekts);
          console.log(ticketType);
      }

    });
});

router.post('/ticketCreate/:type', function(req,res){
    const type = req.params.type;
    var fields = {
      type: type,
      count: 0
    };

    var ticket = new Ticket(fields);
    ticket.save(function(err, ticket){
      if (err) return console.error(err);
      else{
        res.status(200).send();
        console.log('Sucsees post');
      }
    });
});

module.exports = router;
