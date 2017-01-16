angular.module("charts")
.controller("populateLineCtrl", function($scope, $location, $log, chartsFtry, lineChartFtry){
  $log.log("Booting line control");
  $log.log("Number of data points:" + chartsFtry.numDataPoints);
  
  $scope.labels = new Array(chartsFtry.numDataPoints);
  
  $scope.dataPoints = new Array(chartsFtry.numDataPoints);
  
  $scope.processLineChartData = function(){
    for(var i = 0; i < $scope.labels.length; i++){
      $log.log($scope.labels[i]);
      $log.log($scope.dataPoints[i]);
      lineChartFtry.processData($scope.labels, $scope.dataPoints);
      $location.path("/view-line-chart");
    }
  };
});