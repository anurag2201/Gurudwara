var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http) {
    $scope.msg = "hello";
    $scope.openGurbani = function (){
        window.location = "gurubani.html";
    };
    $scope.openHistory = function (){
        window.location = "history.html";
    };
    $scope.openGuru = function (){
        window.location = "gurus.html";
    };
    $scope.openUpdate = function (){
        window.location = "updates.html";
    };
    $scope.openPhotos = function (){
        window.location = "photos.html";
    };
    $scope.openCalendar = function (){
        window.location = "calendar.html";
    };
});