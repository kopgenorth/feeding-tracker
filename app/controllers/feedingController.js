(function () {
    var app = angular.module('FeedingTracker');

    var FeedingController = function ($scope, feedingService) {
        /*$scope.feedings = [{
            person: 'kory',
            time: new Date(),
            type: 'Bottle',
            meds: 1
        }];*/

        $scope.feedings = feedingService.feedings;

        $scope.totalAmount = feedingService.getTotalAmount();

        $scope.feedingEntry = getNewFeeding();

        $scope.addFeeding = function () {
//            $scope.feedings.push($scope.feedingEntry);
            feedingService.addFeeding($scope.feedingEntry);
            $scope.feedingEntry = getNewFeeding();
            $scope.totalAmount = feedingService.getTotalAmount();
            $scope.averageInterval = feedingService.getAverageInterval();
        };

        function getNewFeeding(){
            return {
                time:new Date()
            };
        };
    };

    FeedingController.$inject = ['$scope', 'FeedingService'];

    app.controller('FeedingController', FeedingController);
})();
