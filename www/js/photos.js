var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http) {
    $scope.gurus = ['Nanaksar, Pune, India', 'New Delhi', 'Chandigarh, Punjab', 'Bareily, Uttar Pradesh'];
    $scope.openGuru = function (guru){
        window.localStorage.setItem("photoLocation", guru);
        window.location = 'photo.html';
    };
});