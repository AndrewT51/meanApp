
var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'))
router.get('/', function(req,res){
  res.sendFile('/Users/Andy/bookWork/back/layout/posts.html')
})

module.exports = router;