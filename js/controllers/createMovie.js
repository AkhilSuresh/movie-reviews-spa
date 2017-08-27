var app = angular.module('movieCreate', []);
app.controller('createMovie', function($scope, $http, $location) {
	 $scope.create = function () {
	 	var dataObj = {
				'movieName' : $scope.movieName,
				'movieCast' : $scope.movieCast,
				'movieImage' : $scope.movieImageUrl
		};	
		$http.post('http://localhost:3001/movies', dataObj).then(function(){
          $location.path('/home');
		});
	 } 
});