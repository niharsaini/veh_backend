var express = require('express');
var router = express.Router();
var URL ='mongodb://nihar:Nihar%4022@ds131782.mlab.com:31782/nihar';

const db=require('monk')(URL);

const dot =db.get('srj');
/* GET home page. */
router.get('/welcome', function(req, res, next) {

 res.send("abmnu");
});
router.get('/wel', function(req, res, next) {
    dot.find({}, function(err,docs){
       // res.send("cmmmm")
        if(err) console.log(err);
        else res.json(dot);
    })


});

module.exports = router;
