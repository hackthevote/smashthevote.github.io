angular.module('starter').controller('TopicController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
    $http.get('data/' + $stateParams.topic)
      .then(function (response) {
        var topicData = JSON.parse(response.data);
        $scope.topicName = topicData.name;
        $scope.
      });
    $scope.chats = ['bobby', 'robby', 'danny'];
    console.log($stateParams); 
}]).controller('IntroCtrl', ['$scope', '$timeout', function($scope, $timeout){
    $timeout(function(){ window.location.href = '#/home'}, 3000);
}]);