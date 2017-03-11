/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */

(function() {
    'use strict';

    describe('Min-Max Numbers in a List: ', function () {

        describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

            it('should return [1,4] for [1, 2, 3 , 4]', function () {
                expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
            });

            it('should return [4, 6] for [6, 4]', function () {
                expect(findMinMax([6, 4])).toEqual([4, 6]);
            });

            it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
                expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
            });

            it('should return [2, 1568] for [20, 2, 53, 50, 100, 140, 1568, 20]', function () {
                expect(findMinMax([20, 2, 53, 50, 100, 140, 1568, 20])).toEqual([2, 1568]);
            });

            it('should return [1, 50] for [20, 1, 23, 50]', function () {
                expect(findMinMax([20, 1, 23, 50])).toEqual([1, 50]);
            });

            it('should not be an empty array', function() {
                expect(findMinMax([])).not.toBeNull();
            });

        });

        describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

            it('should return [4] for [4, 4, 4, 4]', function () {
                expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
            });

            it('should return [5] for [5, 5, 5, 5]', function () {
                expect(findMinMax([5, 5, 5, 5])).toEqual([5]);
            });

            it('should return [20] for [20, 20, 20, 20]', function () {
                expect(findMinMax([20, 20, 20, 20])).toEqual([20]);
            });

            it('should not be an empty array', function() {
                expect(findMinMax([])).not.toBeNull();
            });

        });

    });

})();