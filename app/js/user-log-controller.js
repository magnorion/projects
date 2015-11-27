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
  $scope.send_data = function(form){
    function check_data(name,type){
      if(type == "invalid")
        $("#login-user").find("input[name='"+name+"']").addClass("input-error");
      else
        $("#login-user").find("input[name='"+name+"']").removeClass("input-error");
    }
    var data = {
      "user-login-name":$scope.name,
      "user-login-email":$scope.email,
      "user-login-password":$scope.email
    }
    angular.forEach(data,function(value,key){
      if(typeof(value) === 'undefined')
        check_data(key,"invalid");
      else
        check_data(key,"valid");
    });
  }
});
app.controller('forgotPass-page',function($scope,$routeParams){

});
