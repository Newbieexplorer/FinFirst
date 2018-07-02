var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

router.get('/get',function(req,res){
    res.send('get');
});

router.post('/post',function(req,res) {
    res.send('post');
});

router.put('/put',function(req,res) {
    res.send('put');
});

router.delete('/delete',function(req,res){
    res.send('delete');
});

module.exports = router;
