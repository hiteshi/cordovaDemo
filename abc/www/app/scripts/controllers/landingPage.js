'use strict';

angular.module('abcApp')
  .controller('LandingpageCtrl', function ($scope,$location) {
    $scope.name = "PhoneGap Android POC";
    
    $scope.switchPage = function(){
        $location.path("/loginPage");
    };
  });
