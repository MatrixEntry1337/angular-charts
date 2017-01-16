angular.module("app").config(function($routeProvider, $locationProvider){
  // $locationProvider.hashPrefix("");
  
  $routeProvider
    .when("/", {
      templateUrl : "app/partials/main.html"
    })
    .when("/create", {
      templateUrl: "app/partials/create-chart.html",
      controller: "createChartCtrl"
    })
    .when("/populate-line", {
        templateUrl: "app/partials/populate-line.html",
        controller: "populateLineCtrl"
    })
    .when("/populate-bar", {
      templateUrl: "app/partials/populate-bar.html",
      controller: "populateBarCtrl"
    })
    .when("/populate-doughnut", {
      templateUrl: "app/partials/populate-doughnut.html",
      controller: "populateDoughnutCtrl"
    })
    .when("/populate-radar", {
      templateUrl: "app/partials/populate-radar.html",
      controller: "populateRadarCtrl"
    })
    .when("/populate-polar", {
      templateUrl: "app/partials/populate-polar.html",
      controller: "populatePolarCtrl"
    })
    .when("/populate-pie", {
      templateUrl: "app/partials/populate-pie.html",
      controller: "populatePieCtrl"
    })
    .when("/populate-bubble", {
      templateUrl: "app/partials/populate-bubble.html",
      controller: "populateBubbleCtrl"
    })
    .when("/view-line-chart", {
      templateUrl: "app/partials/view-line-chart.html",
      controller: "viewLineCtrl"
    })
    .otherwise({redirectTo:'/'});

});