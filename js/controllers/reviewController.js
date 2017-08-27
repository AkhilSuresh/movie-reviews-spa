var app = angular.module('myControllers', ['ngStorage']);
app.controller('reviewController', function($scope, movieService, $http, $localStorage, $location) {
	
	$scope.movie = movieService.getMovie() ? movieService.getMovie() : $localStorage.movie ? $localStorage.movie : [];
    
    movieService.getReviews()
      .then(function(arrItems){
      	var reviewsArray = [];
        var reviewsList = arrItems.data;
         for(i=0;i<reviewsList.length;i++){
         	if(reviewsList[i].movieName === $scope.movie.movieName) {
               reviewsArray.push(reviewsList[i]);
         	}
         }
         $scope.reviews = reviewsArray;
       });

    $scope.writeReview = function () {
      var dataObj = {
				'movieName' : $scope.movie.movieName,
				'review' : $scope.review
		};
		$http.post('http://localhost:3001/review', dataObj).then(function(){
          $location.path('/home');
		});
    };
});