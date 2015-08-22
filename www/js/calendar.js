var gd = angular.module('gurudwara', []);

gd.controller('homeCTRL', function($scope, $http, $filter) {
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
            beforeShowDay: available
        });
        $.mobile.loading("hide");
        changeColor();
    };

    $scope.calendar();
});

var availableDates = ["15-8-2015", "17-8-2015", "22-8-2015", "9-9-2015", "14-9-2015", "15-9-2015", "9-10-2015", "14-10-2015", "15-10-2015"];
var colors = ["#42B373","#DC143C","#00FFFF","#008B8B","#B8860B","#006400", "#FF8C00", "#FF1493", "#DAA520", "#000080", "#FF0000"];
//do not append 0 before any digit
function available(date) {
    dmy = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    if ($.inArray(dmy, availableDates) != -1) {
        return [true, "event-gd", "Available"];
    } else {
        return [false, "", "unAvailable"];
    }
}

function changeColor(){
    $(".event-gd").each(function (index, elt){
        $(elt).children("a").css("background-color", colors[index]);
    });
    $(".table-container table tbody tr").each(function (index, elt){
        $(elt).children("td").css("color", colors[index]);
    });
}