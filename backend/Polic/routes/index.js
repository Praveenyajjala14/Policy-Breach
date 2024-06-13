var express = require('express');
var router = express.Router();
var monk = require('monk')
var db = monk('127.0.0.1:27017/PolicyBreach_Admin')
var collection = db.get('login_data')
var studne = db.get('students_details')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/postdata', function(req, res){
  // console.log(req.body)
  const data = {
    username:req.body.send.username,
    password:parseInt(req.body.send.password)
  }
  collection.insert(data, function(err, docs){
    if(err){
      res.send(err)
    }else{
      res.send(docs)
    }
  })
})
router.get('/getData',function(req,res){
  studne.find({},function(err,docs){
  if(err)
  {
    res.send(err)
  }
  else{
    res.send(docs);
  }
})
})  
module.exports = router;
