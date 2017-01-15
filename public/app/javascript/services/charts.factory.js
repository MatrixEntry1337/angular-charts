angular.module('charts')
    .factory('chartsFtry', function($log){
        $log.log("Booted chart factory");
        
        var charts = {};
        
        return charts;
    });