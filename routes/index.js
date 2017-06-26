var express = require('express');
var router = express.Router();
var URL ='mongodb://nihar:Nihar%4022@ds131782.mlab.com:31782/nihar';

const db=require('monk')(URL);

const docs =db.get('srj');
/* GET home page. */
router.get('/welcome', function(req, res, next) {

 res.send("abmnu");
});
router.get('/push', function(req, res, next) {
    docs.update({"id":"12345"},{$push:{"group":{"name":"user3"}}}, function(err,docs){
        if(err) console.log(err);
        else res.json(docs);
    })
});
router.post('/insert', function(req, res, next) {
 var username=req.body.name;
 var pass=req.body.password;
    docs.insert({"name":username,"password":pass}, function(err,docs){
        if(err) console.log(err);
        else res.json(docs[0]);
    })
});
router.get('/find', function(req, res, next) {
    docs.find({"id": "123456"}, function(err,docs){
        if(err) console.log(err);
        else res.json(docs[0]);
    })
});
router.get('/ni',function (reg,res,next) {
    res.send('welcome to heroku');

});

module.exports = router;
