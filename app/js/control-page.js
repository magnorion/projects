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
app.config(function($routeProvider){
  $routeProvider
  .when('/',{ // Index
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

});
// ************************************************************

// ******************* Controllers *******************************
app.controller('dashboardController',function($scope,$routeParams){
  $scope.bogus_number = 2;
});

app.controller('profileController',function($scope,$routeParams){

});

app.controller('infoController',function($scope,$routeParams){

});

app.controller('searchController',function($scope,$routeParams){

});
// ****************************************************************
