/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */


function findMin(arrayValue){
    var minValue = arrayValue[0];
    for (var i = 0; i < arrayValue.length; i++){
        if (arrayValue[i] < minValue){
            minValue = arrayValue[i];
        }
    }
    return minValue;
}