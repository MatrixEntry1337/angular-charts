angular.module("charts")
    .factory("barChartFtry", function($log) {
        var barChart = {};
        $log.log("Booted Bar Factory.");
        return barChart;
    });