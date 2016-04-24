angular.module('starter').controller('WhenCtrl', ['$scope', '$interval', function($scope, $interval){
    function setCountdown(days, hours, minutes, seconds){
        $('#days_flaps .flap.left').text(Math.floor(days/10));
        $('#days_flaps .flap.right').text(Math.floor(days % 10));
        $('#hours_flaps .flap.left').text(Math.floor(hours / 10));
        $('#hours_flaps .flap.right').text(Math.floor(hours % 10));
        $('#minutes_flaps .flap.left').text(Math.floor(minutes / 10));
        $('#minutes_flaps .flap.right').text(Math.floor(minutes % 10));
        $('#seconds_flaps .flap.left').text(Math.floor(seconds / 10));
        $('#seconds_flaps .flap.right').text(Math.floor(seconds % 10));
        console.log("time: ", days, hours, minutes, seconds);
    }

    function dd(d1, d2, div, rem){
            var t2 = d2.getTime();
            var t1 = d1.getTime();
    
            return parseInt(( (t2-t1) % rem ) / div );
    }

    $interval(function() {
        var then = new Date(2016,06,2,23,59,59);
        var now = new Date();
        var diffMs = (then.getTime() - now.getTime());
        var diffDays = Math.round(diffMs / 86400000); // days
        var diffHrs = Math.round((diffMs % 86400000) / 3600000); // hours
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
        var diffSecs = Math.round((diffMs / 1000) % 60); //seconds
        setCountdown(diffDays, diffHrs, diffMins, diffSecs );
    }, 1000);
}]);