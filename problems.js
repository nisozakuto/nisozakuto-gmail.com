console.log("Problem 1");

function myproblem1() {
    //If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
    //Find the sum of all the multiples of 3 or 5 below 1000.

    var totalcount = 0;
    for (var i = 1; i < 1000; i++) {

        if (i % 15 == 0) {
            totalcount = totalcount + i;
            console.log(i + " - 15 -  " + totalcount);
        } else if (i % 3 == 0) {
            totalcount = totalcount + i;
            console.log(i + " - 3 -  " + totalcount);
        } else if (i % 5 == 0) {
            totalcount = totalcount + i;
            console.log(i + " - 5 -  " + totalcount);
        }

    }
    document.getElementById('Result').textContent = totalcount;
    return totalcount;
}

var FibonacciSeries = function(length) {

    if (length === 1)
        return [0, 1];
    else {

        var s = FibonacciSeries(length - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
console.log(FibonacciSeries(10));

//var num = 20;
function myproblem2(num) {
    var n1 = 1,
        n2 = 0,
        temp;

    console.log(num);
    var SeriesText = document.getElementById('Problem2');
    SeriesText.textContent = " ";
    var FibonacciArray = [];

    while (num >= 1 && n2 < 4000000) {
        console.log("num: " + num + ", n2: " + n2);
        if (n2 > 0) { FibonacciArray.push(n2); }

        temp = n1;
        n1 = n1 + n2;
        n2 = temp;
        num--;
        SeriesText.textContent = FibonacciArray.toString();
    }
    return n2;
}