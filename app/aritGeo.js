/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */


function ArithGeo(arrayValue) {

    var diff = arrayValue[1] - arrayValue[0];
    var ratio = arrayValue[1] / arrayValue[0];

    var arith = true;
    var geo = true;

    for(var i = 0; i < arrayValue.length - 1; i++)
    {
        if( arrayValue[i + 1] - arrayValue[i] !== diff )
            arith = false;
        if(arrayValue[i + 1] / ratio !== arrayValue[i])
            geo = false;
    }

    if(arith === true)
        return "arithmetic";
    else if(geo === true)
        return" geometric";
    else
        return -1;

}