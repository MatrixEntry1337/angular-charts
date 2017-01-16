angular.module('charts')
.controller('createChartCtrl', function($scope, $log, $location, chartsFtry){
  $log.log("Booted chart controller");

  $scope.startChartCreation = function(){
    $log.info($scope.chartName);
    $log.info($scope.numDataPoints);
    $log.info($scope.chartType);
    chartsFtry.chartSetup($scope.chartName, $scope.numDataPoints, $scope.chartType);
    dispatch($scope.chartType);
  };
  
   function dispatch(chartType){
    switch(chartType){
        case "Line":
            $location.path("populate-line");
            break;
        case "Bar":
            $location.path("populate-bar");
            break;
        case "Radar":
            $location.path("populate-radar");
            break;
        case "Polar":
            $location.path("populate-polar");    
            break;
        case "Pie":
            $location.path("populate-pie");
            break;
        case "Bubble":
            $location.path("populate-bubble");
            break;
        default:
            $location.path("/");
    }
  };
        
});