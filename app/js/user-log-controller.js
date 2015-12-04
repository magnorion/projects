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
    var error_counter = 0;
    var dados = {
      'user-login-name':$scope.userLogin,
      'user-login-pass':$scope.userPassword
    };
    // Checa se os campos estão vazios
    angular.forEach(dados,function(value,key){
      if(value == "" || value === undefined){
        $("#login-user").find("input[name='"+key+"']").addClass("input-error");
        error_counter++;
      }
      else{
        $("#login-user").find("input[name='"+key+"']").removeClass("input-error");
      }
    });
    // ***

    // Checar usuário email
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test($scope.userLogin)){
      $("#login-user").find("input[name='user-login-name']").addClass("input-error");
      error_counter++;
    }else{
      $("#login-user").find("input[name='user-login-name']").removeClass("input-error");
    }

    if(error_counter > 0) return false;

    $http({
      url:'login-user',
      method:'GET',
      data:{
        name:$scope.userLogin,
        pass:$scope.userPassword
      }
    }).success(function(data){
      console.log(data);
    });
  };
});

app.controller('sigin-page',function($scope,$routeParams,$http){
  var count_click = 0;
  $scope.send_data = function(form){
    var error_counter = 0;
    if(count_click > 0) return false; // Checa se houve mais de um click
    function check_data(name,type){
      if(type == "invalid"){
        $("#login-user").find("input[name='"+name+"']").addClass("input-error");
        error_counter++;
      }
      else{
        $("#login-user").find("input[name='"+name+"']").removeClass("input-error");
      }
      return error_counter;
    }
    var data = {
      "user-login-name":$scope.name,
      "user-login-email":$scope.email,
      "user-login-password":$scope.password,
      "user-login-passConfirm":$scope.password_confirm
    };
    angular.forEach(data,function(value,key){
      if(typeof(value) === 'undefined' || value == '')
        check_data(key,"invalid");
      else
        check_data(key,"valid");
    });

    // If some error here ---
    if(error_counter > 0) return false;

    //Check email
    var re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test($scope.email)){
      check_data("user-login-email","invalid");
    }else{
      check_data("user-login-email","vaild");
    }

    // Check password confirmation
    if($scope.password != $scope.password_confirm){
      check_data("user-login-passConfirm","invalid");
    }else{
      check_data("user-login-passConfirm","vaild");
    }

    // If some error here ---
    if(error_counter > 0) return false;

    var dados = {
      "name":$scope.name,
      "email":$scope.email,
      "password":$scope.password
    };
    // Confirma o click do usuário e não o deixa executar a ação novamente!
    count_click++;

    $http({
      url:'cad-user',
      method:'POST',
      data:{
        dados:dados
      }
    }).success(function(data){
      if(data.msg == 'Usuário cadastrado!'){
        var box = $('#form-placement');
        $(".btn-submit").remove();
        box.empty();
        box.append("<h2> Olá "+dados.name+"! </h2> <p> Use seu email e sua senha para o login! </p>");
      }
    });

  }
});
app.controller('forgotPass-page',function($scope,$routeParams){

});
