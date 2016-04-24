// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('intro', {
      url: "/",
      templateUrl: 'templates/intro.html',
      controller: 'IntroCtrl'
  })
  .state('home', {
      url: "/home",
      templateUrl: 'templates/home.html'
  })
  .state('why', {
    url: "/why",
    templateUrl: 'templates/why.html'
  })
  .state('when', {
    url: "/when",
    templateUrl: 'templates/when.html'
  })  
  .state('how', {
    url: "/how",
    templateUrl: 'templates/how.html'
  })
  .state('economics', {
    url: "/economics",
    templateUrl: 'templates/economics/economics.html'
  })
  .state('remainEconomics', {
    url: "/remain_economics",
    templateUrl: 'templates/economics/remainEconomics.html'
  })

  $urlRouterProvider.otherwise('/');  
})
