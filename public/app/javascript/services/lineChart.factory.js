angular.module("charts")
    .factory("lineChartFtry", function($log) {
        $log.log("Booted Line Factory");
        var lineChart = {};

        lineChart.processData = function(labels, dataPoints) {
            lineChart.labels = labels;
            lineChart.dataPoints = dataPoints;
        };

        return lineChart;
    });
