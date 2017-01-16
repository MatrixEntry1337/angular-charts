angular.module("charts").factory("lineChartFtry", function(){
  var lineChart = {};
  
  lineChart.processData = function(labels, dataPoints){
    lineChart.labels = labels;
    lineChart.dataPoints = dataPoints;
  };
  
  return lineChart;
});