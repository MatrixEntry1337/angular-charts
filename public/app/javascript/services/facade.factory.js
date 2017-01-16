angular.module("charts")
    .factory("facadeFtry",
        function($log, chartsFtry, lineChartFtry, barChartFtry, bubbleChartFtry,
            doughnutChartFtry, pieChartFtry, polarChartFtry, radarChartFtry) {

            $log.log("Booted Facade Factory.");

            var facade = {};

            /** Chart Setup **/
            facade.initialChartSetup = function(chartName, numDataPoints, chartType) {
                chartsFtry.initialChartSetup(chartName, numDataPoints, chartType);
            };

            facade.getNumDataPoints = function() {
                return chartsFtry.numDataPoints;
            };
            
            facade.getChartName = function(){
                return chartsFtry.chartName;
            };

            /** Populate Line Chart Data **/
            facade.processLineChartData = function(labels, dataPoints) {
                lineChartFtry.processData(labels, dataPoints);
            };
            
            facade.getLineChartLabels = function(){
                return lineChartFtry.labels;  
            };
            
            facade.getLineChartData = function(){
                return lineChartFtry.dataPoints;  
            };

            return facade;
        });
