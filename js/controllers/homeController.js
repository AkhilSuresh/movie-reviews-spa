var app = angular.module('abc', ['ngStorage']);
app.controller('homeController', function($scope, $location, $http, movieService, $localStorage) {
	movieService.getlist()
      .then(function(arrItems){
      	console.log('aaaaaaaaa',arrItems);
         $scope.movies = arrItems.data;
       });

	$scope.$applyAsync();
    $scope.onClick = function (movie) {
    	$localStorage.movie = movie;
    	movieService.setMovie(movie);
    	// $window.location.href = '/review';
    	$location.path('/review');

    }
});