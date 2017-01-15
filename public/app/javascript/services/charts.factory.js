angular.module('charts')
    .factory('chartsFtry', function($log){
        $log.log("Booted chart factory");
        var charts = {};
        
        charts.chartSetup = function(chartName, numDataPoints, chartType){
            
        };
        
        
        return charts;
    });