angular.module("app").config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix("");
    
    $routeProvider
        .when("/", {
        templateUrl : "app/partials/main.html",
        controller: "chartsCtrl"
    });

});