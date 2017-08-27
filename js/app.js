var app = angular.module("movies", ['ngRoute', 'myControllers', 'myServices', 'abc', 'movieCreate']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: './home.html',
			controller: 'homeController as homeController'
		})
		.when('/about', {
			templateUrl: './about.html'
		})
		.when('/review', {
			templateUrl: './review.html',
			controller: 'reviewController as reviewController'
		})
		.when('/join', {
			templateUrl: './joinus.html'
		})
		.when('/contactus', {
			templateUrl: './contact.html'
		})
		.when('/create', {
			templateUrl: './create.html',
			controller: 'createMovie as createMovie'
		})
		.otherwise({
			redirectTo: '/'
		});
		$locationProvider.html5Mode(true).hashPrefix('!');
});


(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
		$(".search-form button").click(function(){
			$(this).toggleClass("active");
			var $parent = $(this).parent(".search-form");

			$parent.find("input").toggleClass("active").focus();
		});


		$(".slider").flexslider({
			controlNav: false,
			prevText:'<i class="fa fa-chevron-left"></i>',
			nextText:'<i class="fa fa-chevron-right"></i>',
		});
		if( $(".map").length ) {
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 14 
					}  
				},
				marker:{
					address: "40 Sibley St, Detroit",
				}
			},
			"autofit" );
	    	
	    }
	});

	$(window).load(function(){

	});

})(jQuery, document, window);