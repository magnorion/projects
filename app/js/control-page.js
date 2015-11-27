"use strict";
var app = angular.module('fake',['ngRoute','door3.css','ngAnimate']);
// ********************* Directives ***************************
// Carousel Directive ---
app.directive('carousel',function($http,$timeout){
  return {
    restrict: "A",
    link: function(scope,element){
      element.addClass('owl-carousel');
      element.owlCarousel();
    }
  }
});
// Carousel end ---
// ************************************************************

// Routes *****************************************************
app.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $routeProvider
  .when('/',{
    templateUrl:'partials/dashboard.html',
    controller:'dashboardController',
    css:'../css/style-dashboard-page.css'
  })

  .when('/profile',{
    templateUrl:'partials/user-profile.html',
    controller:'profileController',
    css:'../css/style-userProfile-page.css'
  })

  .when('/informations',{
    templateUrl:'partials/my-data.html',
    controller:'infoController',
    css:'../css/style-myData-page.css'
  })

  .when('/search',{
    templateUrl:'partials/search-page.html',
    controller:'searchController',
    css:'../css/style-search-page.css'
  })

  .when('/stage',{
    templateUrl:'partials/stage.html',
    controller:'stageController',
    css:['../css/style-userProfile-page.css','../css/style-stage-page.css']
  })

  .when('/event',{
    templateUrl:'partials/stage-event.html',
    controller:'eventController',
    css:['../css/style-userProfile-page.css','../css/style-stage-page.css','../css/style-stageEvent-page.css']
  })

  .when('/post',{
    templateUrl:'partials/new-post.html',
    controller:'postController',
    css:['../css/style-userProfile-page.css','../css/style-stage-page.css','../css/style-stageEvent-page.css']
  });

  $locationProvider.html5Mode({
    enabled:false,
    requireBase:false
  });

}]);

// ************************************************************

// ******************* Controllers *******************************
app.controller('top-menu',function($scope){
  $scope.logout = function(){
    var url = "http://localhost/fake/app/#";
    window.location.assign(url);
  }
});

app.controller('dashboardController',function($scope,$routeParams){
  $scope.bogus_number = 2;
});

app.controller('profileController',function($scope,$routeParams){

});

app.controller('infoController',function($scope,$routeParams){

});

app.controller('searchController',function($scope,$routeParams){

});

app.controller('stageController',function($scope,$routeParams){

});

app.controller('eventController',function($scope,$routeParams){

});

app.controller('postController',function($scope,$routeParams,$rootScope){
  var config = {
    postLimit: 2200
  };
  var preview = {
    "stage": $("#preview-post"),
    "btn": $("#post-test"),
    "text": $("textarea[name='post-input']")
  };
  var btn = preview.btn;
  function preview_post(){
    var text_post_lower = document.querySelector('#post-input').value.toLowerCase();
    var black_list_tags = ['iframe','style','applet', 'body', 'bgsound', 'base', 'basefont', 'embed', 'frame', 'frameset', 'head', 'html', 'id', 'ilayer', 'layer', 'link', 'meta', 'name', 'object', 'script', 'title', 'xml', 'action', 'background', 'codebase', 'dynsrc', 'lowsrc','href'];
    var counter = 0;
    var text_post;
    while(counter < black_list_tags.length){
      text_post = text_post_lower.replace("<"+black_list_tags[counter],"");
      if(text_post != text_post_lower){
        $("#modalTrigger").trigger("click");
        return false;
      }
      counter++;
    }
    preview.stage.empty(); // Cleaner ---
    btn.unbind("click",preview_post);
    preview.stage.append(text_post);
    preview.text.animate({opacity:0},250,function(){
      $(this).css({"display":"none"});
      preview.stage.css({"display":"block","opacity":"1"});
      btn.bind("click",edit_post);
    });
  }
  function edit_post(){
    btn.unbind("click",edit_post);
    preview.stage.animate({opacity:0},250,function(){
      $(this).css({"display":"none"});
      preview.text.css({"opacity":"1","display":"block"});
      btn.bind("click",preview_post);
    });
  }
  btn.on("click",preview_post);
});
// ****************************************************************
