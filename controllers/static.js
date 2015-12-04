
var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'))
router.get('/', function(req,res){
  res.sendFile('/Users/Andy/bookWork/back/layout/app.html')
})
router.use(express.static(__dirname + '/../templates'))

module.exports = router;