var express = require('express');
var Portfolio = require('./../models/Portfolio');
var Ticket = require('./../models/Ticket');
var router = express.Router();

router.get('/portfolio/:id',function(req,res){
    const portfolioId = req.params.id;

    Portfolio.find({id : portfolioId},function (err, portfolios){
      if (err) return console.error(err);
      res.send(portfolios);
    });
});

router.get('/portfolioName/:name',function(req,res){
    const portfolioName = req.params.name;

    Portfolio.find({name : portfolioName},function (err, portfolios){
      if (err) return console.error(err);
      res.send(portfolios);
    });
});

router.post('/portfolioCreate/:name&:type', function(req,res){
    const name = req.params.name;
    const type = req.params.type;
    console.log(name,+' '+type);
    var tickets = [];
    for (var i = 0; i < 3; i++) {
        tickets.push(new Ticket({
            type: type,
            count: i
        }));
    }

    for (var i = 0; i < 3; i++) {
        var ticket = tickets[i];
        ticket.save(function(err, ticket){
          if (err) console.log(err);
        });
    }
    var fields = {
      name: name,
      stratDate: new Date(),
      startBalance: 0,
      realBalance: 0,
      currency: '',
      tickets: tickets
    };

    var portfolio = new Portfolio(fields);
    portfolio.save(function(err, portfolio){
      if (err) return console.error(err);
      res.status(200).send();
    });
});

module.exports = router;
