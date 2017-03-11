/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */


function aritGeo(arr) {
    if (arr.length > 0) {

        var diff = arr[1] - arr[0];
        var ratio = arr[1] / arr[0];

        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] - arr[i] == diff) {
                resp = "Arithmetic";
            } else if (arr[i + 1] / ratio == arr[i]) {
                resp = "Geometric";
            } else if ((arr[i + 1] / ratio !== arr[i]) || (arr[i + 1] - arr[i] == diff )) {
                resp = -1;
            }
        }

        return resp;
        
    } else if (arr.length == 0) {
        return 0;
    }
}