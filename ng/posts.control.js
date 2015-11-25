angular.module('app')
.controller('PostCtrl', ['$scope','PostsSvc', function($scope, PostsSvc){
  PostsSvc.fetch()
  .success(function(posts){
    $scope.posts = posts
  })
  // $scope.posts = [];
  $scope.addPost = function(){
    if ($scope.postBody){
      PostsSvc.create({
        username: 'dickeyxxx',
        body: $scope.postBody
      })
      .success(function(post){
        $scope.posts.unshift(post);
        $scope.postBody = null;
        console.log(post)
      })
    }
  }
}])