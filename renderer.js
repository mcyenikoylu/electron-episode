var app = angular.module('electron-episode',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'home.html'
    })
    .when('/home',{
        templateUrl: 'home.html'
    })
    .when('/world', {
        templateUrl: 'world.html'
    });
}); 