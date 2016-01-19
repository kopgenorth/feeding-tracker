(function () {
    var app = angular.module('FeedingTracker');

    var feedingService = function (moment) {
        var service = this;
        service.feedings = [];

        this.addFeeding = function (feeding) {
            service.feedings.push(feeding);
        };

        this.getTotalAmount = function () {
            var total = 0;
            for (var feeding of service.feedings) {
                total += feeding.amount;
            }
            return total;
        };

        this.getMedsGiven = function () {
            var totalMeds = 0;
            for (var feeding of service.feedings) {
                totalMeds += feeding.meds;
            }
            return totalMeds >= 1 ? 'Yes' : 'No';
        };

        this.getAverageInterval = function () {
                        var totalMilliseconds = 0
//            var totalHours = 0;
            var sortedFeedings = service.feedings.sort((a, b) => a.time - b.time);

            for (i = 0; i < sortedFeedings.length - 1; i++) {
                /*debugger;
                diffArray.push(service.feedings[i].time - service.feedings[i+1].time);
                */

                //                    totalMilliseconds += Math.abs(sortedFeedings[i].time - sortedFeedings[i+1].time);
                //                    totalMilliseconds = moment(sortedFeedings[i]).diff(moment(sortedFeedings[i+1]), "hours")
                /*firstMoment = moment(sortedFeedings[i].time);
                secondMoment = moment(sortedFeedings[i+1].time);
                totalHours += firstMoment.diff(secondMoment, "hours");*/
                try {
//                    totalHours += moment(sortedFeedings[i+1].time).diff(moment(sortedFeedings[i].time), "hours");
                    totalMilliseconds += moment(sortedFeedings[i+1].time).diff(moment(sortedFeedings[i].time));
                } catch (e) {
                    console.log(e);
                }
            }
           var averageMilliseconds = totalMilliseconds / (sortedFeedings.length - 1);
           /*
            var seconds = averageMilliseconds / 1000;
            var minutes = seconds / 60;
            var hours = minutes / 60;

            var tmpMoment = moment.duration({
                hours: 2,
                minutes: 30
            })

            return tmpMoment;*/
            return moment.duration(averageMilliseconds);
        }
    };

    feedingService.$inject = ['moment'];
    app.service('FeedingService', feedingService);
})();
