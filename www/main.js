var myResume = angular.module('myResume', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

myResume.controller("rootCtrl", function($scope, $http, $sce) {
	$http.get('www/data.json')
			.then(function(res) {
				$scope.model = res.data;
			})

	$scope.trustAsHtml = function(string) {
    	return $sce.trustAsHtml(string);
	};
});