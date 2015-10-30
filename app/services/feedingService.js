(function () {
    var app = angular.module('FeedingTracker');

    var feedingService = function () {
        var service = this;
        service.feedings = [];

        this.addFeeding = function (feeding) {
            service.feedings.push(feeding);
        }
    };

    app.service('FeedingService', feedingService);
})();
