angular.module("charts")
    .controller("viewLineCtrl", function($scope, $log, facadeFtry) {
        // $scope.data = [];
        $scope.chartName = facadeFtry.getChartName();

        $log.log(facadeFtry.getLineChartLabels());
        $scope.labels = facadeFtry.getLineChartLabels();

        $log.log(facadeFtry.getLineChartData());
        $scope.data = facadeFtry.getLineChartData();

        // $scope.series = ['Series A'];

        // $scope.onClick = function(points, evt) {
        //     console.log(points, evt);
        // };
        // $scope.datasetOverride = [{
        //     yAxisID: 'y-axis-1'
        // }];
        // $scope.options = {
        //     scales: {
        //         yAxes: [{
        //             id: 'y-axis-1',
        //             type: 'linear',
        //             display: true,
        //             position: 'left'
        //         }]
        //     }
        // };

    });
