var Post = require('../../models/post');
var router = require('express').Router();

router.get('/', function(req,res){
  Post.find()
  .sort('-date')
  .exec(function(err,posts){
    if (err) res.send(err)
    res.json(posts)
  })
});

router.post('/', function(req, res){
  console.log('Username: ',req.body.username)
  var post = new Post({
    username: req.body.username,
    body: req.body.body
  })
  .save(function(err, post){
    if(err) res.send(err)
    res.status(201).json(post)
  })
})

module.exports = router;