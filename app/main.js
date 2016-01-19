angular.module("FeedingTracker", ['ui.bootstrap','angularMoment'])
.filter("durFormat", function(){
    return function(format){
        return format.format("h [hours] m [minutes]")
    }
});
