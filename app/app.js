

(function () {
    'use strict';        
    
    angular.module("app", ['ngRoute', 'ngCookies'])
      
    .config(function($routeProvider) {
     $routeProvider
            .when('/', {
                controller: 'LoginController',
                templateUrl: 'views/loginView.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'views/loginView.html',
                controllerAs: 'vm'
            })

             .when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/homeView.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'views/registerView.html',
                controllerAs: 'vm'
            })

            .otherwise({ redirectTo: '/login' });
    });
       
})();
