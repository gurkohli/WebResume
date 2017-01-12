var coverBuilder = angular.module('coverBuilder', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

coverBuilder.controller("rootCtrl", function($scope, $http, $sce) {
  $scope.date = new Date()
});