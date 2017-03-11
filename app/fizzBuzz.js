/**
 * Created by Maranatha Ilesanmi on 3/10/2017.
 */


function fizzBuzz(arg) {
    var i = 1;
    if ((arg % 3 == 0) && (arg % 5 == 0)) {
        return "FizzBuzz";
    } else if (arg % 5 == 0) {
        return "Buzz";
    } else if (arg % 3 == 0) {
        return "Fizz";
    } else {
        return arg;
    }
}