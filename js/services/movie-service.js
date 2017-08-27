var app = angular.module('myServices', []);
app.service('movieService', function($http) {
    this.selectedmovie = '';
    
	this.setMovie = function (movie)  {
      this.selectedmovie = movie;
	};

	this.getMovie = function() {
      return this.selectedmovie;
	}

	this.getlist = function(){            
        return $http.get('http://localhost:3001/movies')
            .then(function(response) {
              return response;
            });            
    }

    this.getReviews = function(){            
        return $http.get('http://localhost:3001/review')
            .then(function(response) {
              return response;
            });            
    }
});