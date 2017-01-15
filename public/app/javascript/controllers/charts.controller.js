angular.module('charts')
    .controller('chartsCtrl', function($scope, $log, $location, chartsFtry){
        $log.log("Booted chart controller");

        $scope.startChartCreation = function(){
            $log.info($scope.chartName);
            $log.info($scope.numDataPoints);
            $log.info($scope.chartType);
            chartFtry.chartSetup($scope.chartName, $scope.numDataPoints, $scope.chartType);
            $location.path("/");
        };
        
    });