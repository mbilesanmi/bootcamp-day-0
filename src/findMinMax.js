/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */

function findMinMax(arr){
    var min = arr[0];
    var max = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
        minMax = [min, max];

        if ((arr[i] == min) && (arr[i] == max)) {
            minmax = arr[i];
            minMax = [minmax];
        }
    }

    return minMax;
}