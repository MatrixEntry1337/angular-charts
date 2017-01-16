angular.module('charts')
    .controller('createChartCtrl', function($scope, $log, $location, chartsFtry){
        $log.log("Booted chart controller");

        $scope.startChartCreation = function(){
            $log.info($scope.chartName);
            $log.info($scope.numDataPoints);
            $log.info($scope.chartType);
            chartsFtry.chartSetup($scope.chartName, $scope.numDataPoints, $scope.chartType);
            dispatch(chartType);
        };
        
         function dispatch(chartType){
            switch(chartType){
                case: "Line"
                    $location("populate-line");
                    break;
                case: "Bar"
                    $location("populate-bar");
                    break;
                case: "Radar"
                    $location("populate-radar");
                    break;
                case: "Polar"
                    $location("populate-polar");    
                    break;
                case: "Pie"
                    $location("populate-pie");
                    break;
                case: "Bubble"
                    $location("populate-bubble");
                    break;
                default:
                    $location("/");
            }
        };
        
    });