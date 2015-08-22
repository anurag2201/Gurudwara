var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http) {
//    $scope.gurus = ['JAPJI SAHIB', 'JAAP SAHIB', 'SUKKHMANI SAHIB', 'REHRAAS SAHIB', 'KIRTAN SOHILA', 'ARDAAS'];
//    $scope.openGurubani = function (guru){
//        window.localStorage.setItem("gurbaniToken", guru);
//        window.location = 'gurbani-view.html';
//    };

    $scope.number = 10;
    $scope.getNumber = function(num) {
        return new Array(num);
    };
});

gd.filter('range', function() {
    return function(val, range) {
        range = parseInt(range);
        for (var i = 0; i < range; i++)
            val.push(i);
        return val;
    };
});