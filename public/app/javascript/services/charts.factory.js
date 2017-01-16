angular.module('charts')
    .factory('chartsFtry', function($log) {
        $log.log("Booted chart factory");
        var charts = {};

        charts.initialChartSetup = function(chartName, numDataPoints, chartType) {
            $log.info("Factory - chart name :" + chartName);
            charts.chartName = chartName;
            $log.info("Factory - number of data points :" + numDataPoints);
            charts.numDataPoints = numDataPoints;
            $log.info("Factory - chart type :" + chartType);
            charts.chartType = chartType;
        };

        return charts;
    });