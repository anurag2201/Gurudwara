var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http) {
//    $scope.gurus = ['JAPJI SAHIB', 'JAAP SAHIB', 'SUKKHMANI SAHIB', 'REHRAAS SAHIB', 'KIRTAN SOHILA', 'ARDAAS'];
//    $scope.openGurubani = function (guru){
//        window.localStorage.setItem("gurbaniToken", guru);
//        window.location = 'gurbani-view.html';
//    };
    $scope.index = 0;
    $scope.pageSize = 1;
    $scope.number = 10;
    $scope.updates = [];
    
    $scope.getNumber = function(num) {
        return new Array(num);
    };

    $scope.getUpdates = function() {
        $.mobile.loading("show");
        $http({method: 'get',
            url: "http://larva.co.in/gurudwara/gurudwara/api/update.php?index="+$scope.index+"&pageSize="+$scope.pageSize}).
                success(function(data, status, headers, config) {
            $.mobile.loading("hide");
            console.log(data);
            $scope.updates.push.apply($scope.updates, data.data);
            $scope.rem = data.total - ($scope.index + $scope.pageSize);
            $scope.index = $scope.index + $scope.pageSize;
        }).error(function(data, status, headers, config) {
            $.mobile.loading("hide");
            console.log(data);
            console.log(status);
            console.log(headers());
            console.log(config);

        });
        
    };
    
    $scope.getUpdates();
});

gd.filter('range', function() {
    return function(val, range) {
        range = parseInt(range);
        for (var i = 0; i < range; i++)
            val.push(i);
        return val;
    };
});