angular.module("app").config(function($routeProvider, $locationProvider){
    // $locationProvider.hashPrefix("");
    
    $routeProvider
        .when("/", {
            templateUrl : "app/partials/main.html"
        })
        .when("/create",{
            templateUrl: "app/partials/create-chart.html",
            controller: "chartsCtrl"
        })
        .otherwise({redirectTo:'/'});

});