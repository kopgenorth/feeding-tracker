describe("The feeding tracker app", function () {
    describe("the feeding controller", function () {
        beforeEach(function () {
            module("FeedingTracker");
            inject(function ($injector, $rootScope) {
                $scope = $rootScope.$new();
                feedingService = $injector.get('FeedingService');
                $controller = $injector.get("$controller");
                $controller("FeedingController", {
                    $scope: $scope,
                    feedingService: feedingService
                })
            })
        })

        it("should store an array of feedings in scope", function () {
            /*$controller("FeedingController", {
                $scope: $scope,
                feedingService: feedingService
            });*/
            chai.assert.isArray($scope.feedings);
            //            chai.assert.isArray(feedingController.feedings);
        })

        it("should start with an empty feedings array", function () {
            chai.assert.equal($scope.feedings.length, 0);
        })

        it("should increase feeding array when calling addFeeding()", function () {
            $scope.addFeeding({
                person: 'kory',
                time: new Date(),
                type: 'Bottle',
                meds: 1,
                amount: 90
            });
            chai.assert.equal($scope.feedings.length, 1);
        })

        it("should return a new feeding object with the time set", function () {
//            chai.assert.equal($scope.feedingEntry, {});
            $scope.getNewFeeding();
            chai.assert.typeOf($scope.feedingEntry.time, 'date');
        })

        /*it("should sum to the amount of each feeding", function () {
            $scope.addFeeding({
                amount: 27
            });
            $scope.addFeeding({
                amount: 34
            });
            $scope.addFeeding({
                amount: 21
            });
            $scope.addFeeding({
                amount: 86
            });

            chai.assert.equal($scope.totalAmount, 168)
        })*/
    })
})
