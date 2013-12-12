'use strict';

angular.module('abcApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/loginPage', {
        templateUrl: 'views/loginPage.html',
        controller: 'LoginpageCtrl'
      })
      .when('/landingPage', {
        templateUrl: 'views/landingPage.html',
        controller: 'LandingpageCtrl'
      })
      .otherwise({
        redirectTo: '/landingPage'
      });
  });
