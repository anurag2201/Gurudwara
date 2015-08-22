var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http) {
    $scope.gurus = ['JAPJI SAHIB', 'JAAP SAHIB', 'SUKKHMANI SAHIB', 'REHRAAS SAHIB', 'KIRTAN SOHILA', 'ARDAAS'];
    $scope.openGurubani = function (guru){
        window.localStorage.setItem("gurbaniToken", guru);
        window.location = 'gurbani-view.html';
    };
});