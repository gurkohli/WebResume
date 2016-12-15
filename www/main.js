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

myResume.directive('smoothScroll', function() {
  return {
    restrict: 'A',
    link: function(scope, $elem, attrs) {
      var idToScroll = attrs.link;
      $elem.on('click', function() {
        var $target = $(idToScroll);
        if ($target) {
	        var mainTop = $("#main").offset().top
	        var targetTop = $target.offset().top
	        var position = $("#main").scrollTop() + targetTop - mainTop
        	$("#main").animate({scrollTop: position}, "slow");
        }
      });
    }
  }
});