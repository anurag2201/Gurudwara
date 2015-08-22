var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http) {
    $scope.gurus = ['Guru Nanak', 'Guru Angad', 'Guru Amar Das', 'Guru Ram Das', 'Guru Arjan', 'Guru Har Gobind', 'Guru Har Rai', 'Guru Har Krishan', 'Guru Tegh Bahadur', 'Guru Gobind Singh', 'Guru Granth Sahib'];
    $scope.openGuru = function (guru){
        window.localStorage.setItem("guruToken", guru);
        window.location = 'guru-view.html';
    };
});