(function () {
    var app = angular.module('FeedingTracker');

    var feedingService = function () {
        var service = this;
        service.feedings = [];

        this.addFeeding = function (feeding) {
            service.feedings.push(feeding);
        };

        this.getTotalAmount = function () {
          var total = 0;
            for (var feeding of service.feedings)
            {
                total += feeding.amount;
            }
            return total;
        };

        this.getAverageInterval = function () {
            var totalMilliseconds = 0
            var sortedFeedings = service.feedings.sort(function(a,b){
               return a.time - b.time;
            });
            for (i = 0; i < sortedFeedings.length - 1;i++)
                {
                    /*debugger;
                    diffArray.push(service.feedings[i].time - service.feedings[i+1].time);
                    */

                    totalMilliseconds += Math.abs(sortedFeedings[i].time - sortedFeedings[i+1].time);
                }
            var averageMilliseconds = totalMilliseconds / (sortedFeedings.length - 1);
            var seconds = averageMilliseconds / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;

            return hours;
        }
    };

    app.service('FeedingService', feedingService);
})();
