var form = angular.module('form', ['ngAnimate', 'ngSanitize']);

form.controller("rootCtrl", rootCtrl);

function rootCtrl($scope, $http) {
	$http.get('data.json')
			.then(function(res) {
				$scope.model = res.data
			})
	$scope.newCategory = "";

	$scope.entryKey = "";

	$scope.newObj = {};
	$scope.newObj.heading = "";
	$scope.newObj.dates = "";
	$scope.newObj.description = "";

	$scope.output = "";

	$scope.addEntry = function() {
		$scope.model[$scope.entryKey].unshift($scope.newObj);

		$scope.entryKey = "";

		$scope.newObj = {};
		$scope.newObj.heading = "";
		$scope.newObj.dates = "";
		$scope.newObj.description = "";
	}
	$scope.printData = function() {

		$scope.output = JSON.stringify($scope.model)
		console.log($scope.model)
		console.log(JSON.stringify($scope.model));
	};

	$scope.selectDropdown = function(arg) {
		$scope.entryKey = arg
	}
};

