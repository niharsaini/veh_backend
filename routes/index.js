var express = require('express');
var router = express.Router();
var URL ='mongodb://nihar:Nihar%4022@ds131782.mlab.com:31782/nihar';

const db=require('monk')(URL);

const docs =db.get('srj');
/* GET home page. */
router.get('/welcome', function(req, res, next) {

 res.send("abmnu");
});
router.get('/wel', function(req, res, next) {
    docs.insert({firstname:"nihar",lastname:"saini",age:"21"}, function(err,docs){
        if(err) console.log(err);
        else res.json(docs);
    })
});
router.get('/ni',function (reg,res,next) {
    res.send('welcome to heroku');

});

module.exports = router;
