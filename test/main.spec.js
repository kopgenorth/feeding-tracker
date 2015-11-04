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


    })

    describe("the feeding service", function () {
        beforeEach(function () {
            module('FeedingTracker');
            inject(function ($injector) {
                feedingService = $injector.get("FeedingService");
            })
        })

        it("should start with an empty feedings array", function () {
            chai.assert.equal(feedingService.feedings.length, 0);
        })

        it("should increase feeding array when calling addFeeding()", function () {
            feedingService.addFeeding({
                person: 'kory',
                time: new Date(),
                type: 'Bottle',
                meds: 1,
                amount: 90
            });
            chai.assert.equal(feedingService.feedings.length, 1);
        })

        it("should sum to the amount of each feeding", function () {
            feedingService.addFeeding({
                amount: 27
            });
            feedingService.addFeeding({
                amount: 34
            });
            feedingService.addFeeding({
                amount: 21
            });
            feedingService.addFeeding({
                amount: 86
            });

            chai.assert.equal(feedingService.getTotalAmount(), 168)
        })

        it("should average the hour interval between feedings", function () {
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 5, 0, 0,0)
            });
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 6, 0, 0,0)
            });
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 8, 0, 0,0)
            });
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 10, 0, 0,0)
            });
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 13, 0, 0,0)
            });

            chai.assert.equal(feedingService.getAverageInterval(), 2)
        })

        it("should average the hour interval between feedings - regardless of order entered", function () {
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 5, 0, 0,0)
            });
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 13, 0, 0,0)
            });
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 6, 0, 0,0)
            });
            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 10, 0, 0,0)
            });

            feedingService.addFeeding({
                time: new Date(2015, 11, 1, 8, 0, 0,0)
            });

            chai.assert.equal(feedingService.getAverageInterval(), 2)
        })
    })
})
