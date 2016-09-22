var myResume = angular.module('myResume', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

myResume.controller("rootCtrl", function($scope, $http) {
	$http.get('data.json')
			.then(function(res) {
				$scope.model = res.data
			})

});

myResume.controller("educationCtrl", function($scope) {
	
});