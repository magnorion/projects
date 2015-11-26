"use strict";
var app = angular.module("fakeLog",['ngRoute','door3.css']);
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider.
  when('/',{
    controller: 'login-page',
    templateUrl: 'partials/login-page.html'
  }).
  when('/sigin',{
    controller: 'sigin-page',
    templateUrl: 'partials/sigin.html',
    css:['css/style-signin-page.css','css/style-forgotLogin-page.css']
  }).
  when('/forgot-pass',{
    controller: 'forgotPass-page',
    templateUrl: 'partials/forgot-pass.html',
    css:['css/style-forgotLogin-page.css']
  });
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });
}]);

app.controller('login-page',function($scope,$routeParams){
  $scope.login = function(){
    window.location.assign('play/');
  }
});
app.controller('sigin-page',function($scope,$routeParams){

});
app.controller('forgotPass-page',function($scope,$routeParams){

});
