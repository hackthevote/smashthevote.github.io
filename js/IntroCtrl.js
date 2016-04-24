angular.module('starter').controller('IntroCtrl', 
['$scope', '$timeout', '$ionicLoading', '$ionicHistory', function($scope, $timeout, $ionicLoading, $ionicHistory){
    $ionicHistory.nextViewOptions({
        disableBack: true
    });
    $scope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){
            if(toState.name == "intro"){
                $scope.animHidden = true;
                $ionicLoading.show();
                $timeout(function(){ 
                    $ionicLoading.hide(); 
                    $scope.animHidden = false;
                }, 800);
                //$timeout(function(){ window.location.href = '#/home'}, 4000);    
            }
        });
}]);