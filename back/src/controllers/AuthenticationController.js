var express = require('express');
var User = require('./../models/User');
var Portfolio = require('./../models/Portfolio');
var Ticket = require('./../models/Ticket');
var router = express.Router();
var jwt = require('jsonwebtoken');

router.post('/register', function (req, res) {
        if(req.body.password && req.body.login) {
            var portfolios = [];
            var tickets = [];
            for (var i = 0; i < 9; i++) {
                tickets.push(new Ticket({
                    type: 'type',
                    count: i
                }));
            }

            for (var i = 0; i < 9; i++) {
                var ticket = tickets[i];
                ticket.save(function(err, ticket){
                    if (err) console.log(err);
                });
            }

            for (var i = 0; i < 3; i++) {
                portfolios.push(new Portfolio({
                    type: 'type',
                    count: i,
                    tickets: [tickets[i+1],tickets[i+2],tickets[i+3]]
                }));
            }

            for (var i = 0; i < 3; i++) {
                var portfolio = portfolios[i];
                portfolio.save(function(err, portfolio){
                    if (err) console.log(err);
                });
            }

            var user = new User({
                login: req.body.login,
                password: req.body.password,
                portfolios:portfolios
            });

            user.save(function(err, user) {
               if(err) console.log(err);
               else {
                   generateToken(res,user);
               }
            });
        } else {
            console.log(req.body);
            res.status('404').send('wrong cridentials');
        }
});

router.post('/auth', function(req, res) {
    if(req.body.password && req.body.login){
        User.findOne({
            login: req.body.login
        }, function(err, user) {
                if(err){
                    console.log(err, errors);
                    res.status('404').send({
                        error: true,
                        message: err.message
                    });
                }

                if(user && user.password === req.body.password){
                    generateToken(res,user);
                }
                else {
                    console.log(req.body);
                    res.status('404').send('wrong cridentials');
                }
            }
        );
    }
});

function generateToken(res,user) {
    var token = jwt.sign({
        login: user.login,
        password: user.password
    }, global.config.secret,{
        expiresIn: 1440
    });

    user.updateToken(token);

    res.status(200).json({
        message: 'Validation successful',
        token: token
    });
}
module.exports = router;