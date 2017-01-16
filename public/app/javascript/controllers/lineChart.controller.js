angular.module("charts")
.controller("populateLineCtrl", function($scope, $location, $log, facadeFtry){
  $log.log("Booting line control");
  $log.log("Number of data points:" + facadeFtry.getNumDataPoints());
  
  $scope.labels = new Array(facadeFtry.getNumDataPoints());
  
  $scope.dataPoints = new Array(facadeFtry.getNumDataPoints());
  
  $scope.processLineChartData = function(){
    for(var i = 0; i < $scope.labels.length; i++){
      $log.log($scope.labels[i]);
      $log.log($scope.dataPoints[i]);
      facadeFtry.processLineChartData($scope.labels, $scope.dataPoints);
      $location.path("/view-line-chart");
    }
  };
});