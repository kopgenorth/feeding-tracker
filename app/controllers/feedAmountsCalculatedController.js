(function () {
    var app = angular.module('FeedingTracker');

    var FeedAmountsCalculatedController = function ($scope) {
        //120ml per kg per day
        //1 lbs = .45 kg
        /*.45 * babyWeightLbs * 120 / feedsPerDay*/

        $scope.mlPerPound = 120;
        $scope.babyWeightLbs = 0;

//        $scope.amountPerFeeding = calculateAmountPerFeeding();

        function calculateAmountPerFeeding() {
            $scope.amountPerFeeding = .45 * $scope.babyWeightLbs * $scope.mlPerPound / $scope.feedsPerDay;
        };

        $scope.calculateClick = function(){
            calculateAmountPerFeeding();
        }

        $scope.$watch('babyWeightLbs', function(){
            calculateAmountPerFeeding();
        })

        $scope.$watch('feedsPerDay', function(){
            calculateAmountPerFeeding();
        })


    };
    FeedAmountsCalculatedController.$inject = ['$scope'];

    app.controller("FeedAmountsCalculatedController", FeedAmountsCalculatedController);
})();
