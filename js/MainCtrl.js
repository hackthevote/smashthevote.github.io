angular.module('starter').controller('MainCtrl', function($scope){
    $scope.chats = ['bobby', 'robby', 'danny']; 
}).controller('IntroCtrl', ['$scope', '$timeout', function($scope, $timeout){
    $timeout(function(){ window.location.href = '#/home'}, 3000);
}]);