var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http, $filter) {
    $scope.index = 0;
    $scope.pageSize = 1;
    $scope.number = 10;
    $scope.calendarArr = [];
    $scope.availableDates = [];
    $scope.colors = ["#42B373", "#DC143C", "#00FFFF", "#008B8B", "#B8860B", "#006400", "#FF8C00", "#FF1493", "#DAA520", "#000080", "#FF0000"];

    var eventDates = {};
    eventDates[ new Date('04/08/2015')] = new Date('04/08/2015');
    eventDates[ new Date('06/08/2015')] = new Date('06/08/2015');
    eventDates[ new Date('20/08/2015')] = new Date('20/08/2015');
    eventDates[ new Date('25/08/2015')] = new Date('25/08/2015');

    $scope.calendar = function() {

        $("#calendar-div").datepicker({
            dateFormat: 'dd/mm/yy',
            onSelect: function(dateText, inst) {
                var date = $(this).val();
            },
            beforeShowDay: $scope.available
        });
        $.mobile.loading("hide");
        setTimeout(function (){
            $scope.changeColor();
        }, 500);
    };

    $scope.available = function(date) {
        dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        if ($.inArray(dmy, $scope.availableDates) != -1) {
            return [true, "event-gd", "Available"];
        } else {
            return [false, "", "unAvailable"];
        }
    };

    $scope.changeColor = function() {
        $(".event-gd").each(function(index, elt) {
            console.log($scope.colors[index]);
            $(elt).children("a").css("background-color", $scope.colors[index]);
        });
        $(".table-container table tbody tr").each(function(index, elt) {
            $(elt).children("td").css("color", $scope.colors[index]);
        });
    }
//    $scope.calendar();

    $scope.getCalendar = function() {
        $.mobile.loading("show");
        $http({method: 'get',
            url: "http://larva.co.in/gurudwara/gurudwara/api/calendar.php?index=" + $scope.index + "&pageSize=" + $scope.pageSize}).
                success(function(data, status, headers, config) {
            $.mobile.loading("hide");
            console.log(data);
            $scope.calendarArr.push.apply($scope.calendarArr, data.data);
            $.each(data.data, function(index, item) {
                var lastWeek = $filter('date')(item.eventDate, 'd-M-yyyy');
                console.log(lastWeek);
                $scope.availableDates.push.apply($scope.availableDates, [lastWeek]);
            });
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

    $scope.getCalendar();
});

var availableDates = ["15-8-2015", "17-8-2015", "22-8-2015", "9-9-2015", "14-9-2015", "15-9-2015", "9-10-2015", "14-10-2015", "15-10-2015"];
var colors = ["#42B373", "#DC143C", "#00FFFF", "#008B8B", "#B8860B", "#006400", "#FF8C00", "#FF1493", "#DAA520", "#000080", "#FF0000"];
//do not append 0 before any digit
function available(date) {
    dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if ($.inArray(dmy, availableDates) != -1) {
        return [true, "event-gd", "Available"];
    } else {
        return [false, "", "unAvailable"];
    }
}

function changeColor() {
    $(".event-gd").each(function(index, elt) {
        $(elt).children("a").css("background-color", colors[index]);
    });
    $(".table-container table tbody tr").each(function(index, elt) {
        $(elt).children("td").css("color", colors[index]);
    });
}