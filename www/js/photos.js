var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http) {
    $scope.gurus = ['Nanaksar, Pune, India', 'New Delhi', 'Chandigarh, Punjab', 'Bareily, Uttar Pradesh'];
    
    $scope.index = 0;
    $scope.pageSize = 1;
    $scope.number = 10;
    $scope.photos = [];
    
    $scope.openGuru = function (guru, id){
        window.localStorage.setItem("photoLocation", guru);
        window.localStorage.setItem("photoId", id);
        window.location = 'photo.html';
    };
    
    $scope.getPhotos = function() {
        $.mobile.loading("show");
        $http({method: 'get',
            url: "http://larva.co.in/gurudwara/gurudwara/api/album.php?index=" + $scope.index + "&pageSize=" + $scope.pageSize}).
                success(function(data, status, headers, config) {
            $.mobile.loading("hide");
            console.log(data);
            $scope.photos.push.apply($scope.photos, data.data);
            $scope.rem = data.total - ($scope.index + $scope.pageSize);
            $scope.index = $scope.index + $scope.pageSize;
            $scope.calendar();
        }).error(function(data, status, headers, config) {
            $.mobile.loading("hide");
            console.log(data);
            console.log(status);
            console.log(headers());
            console.log(config);

        });

    };

    $scope.getPhotos();
});