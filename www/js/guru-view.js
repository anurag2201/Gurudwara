var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http, $filter) {
    $scope.gurus = ['Guru Nanak', 'Guru Angad', 'Guru Amar Das', 'Guru Ram Das', 'Guru Arjan', 'Guru Har Gobind', 'Guru Har Rai', 'Guru Har Krishan', 'Guru Tegh Bahadur', 'Guru Gobind Singh', 'Guru Granth Sahib'];
    $scope.guruToken = window.localStorage.getItem("guruToken");
    $scope.guruArr = [
        {key: "Guru Nanak", value: "Rehrass sahib, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img:'img/guru/picture/guru-gobind.jpg'},
        {key: "Guru Angad", value: "JAAP SAHIB, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", img:'img/guru/picture/guru-gobind.jpg'},
        {key: "Guru Amar Das", value: "SUKKHMANI SAHIB, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  img:'img/guru/picture/guru-gobind.jpg'},
        {key: "Guru Ram Das", value: "KIRTAN SOHILA, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  img:'img/guru/picture/guru-gobind.jpg'},
        {key: "Guru Har Gobind", value: "Rehrass sahib, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  img:'img/guru/picture/guru-gobind.jpg'}
    ];

    $scope.showdetails = function(key) {
        var found = $filter('filter')($scope.guruArr, {key: key}, true);
        if (found.length) {
            $scope.selected = found[0].value;
            $scope.img = found[0].img;
        } else {
            $scope.selected = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            $scope.img = "img/guru/picture/guru-gobind.jpg";
        }
        return $scope.selected;
    };
});/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


