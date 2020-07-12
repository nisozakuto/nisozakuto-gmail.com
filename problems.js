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

var FibonacciSeries = function (length) {

    if (length === 1)
        return [0, 1];
    else {
        var s = FibonacciSeries(length - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}
//console.log(FibonacciSeries(10));

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
        if (n2 > 0) {
            FibonacciArray.push(n2);
        }

        temp = n1;
        n1 = n1 + n2;
        n2 = temp;
        num--;
        SeriesText.textContent = FibonacciArray.toString();
    }
    return n2;
}


function myproblem3(number) {
    //    return ("No Answer yet.");
    var originalNumber = number;
    var divisor = 2;
    while (number > 1) {
        if (number % divisor == 0) {
            number = number / divisor;
        } else
            divisor++;
        console.log("number: " + number + " - divisor: " + divisor);
    }
    document.getElementById("Problem3").innerText = (originalNumber / divisor) + ", " + divisor;
    return console.log((originalNumber / divisor) + ", " + divisor);
}

function Premyproblem3() {
    var originalNumber1 = document.getElementById("numberToBreak").value;
    console.log(originalNumber1);
    myproblem3(originalNumber1);
    return originalNumber1;
}


function myproblem4(largestPalindrome) {
    //Largest 3x3 must be less smaller than => 999x999 = 998001
    for (var i = 998001; i > 997001; i--) {
        if (i > 100000) {
            var firstpart = i / 1000;
            firstpart = Math.trunc(firstpart);
            var secondpart = i % 1000;
            console.log("firstpart: " + firstpart + ", secondpart: " + secondpart);
            if (firstpart == secondpart) {
                console.log(firstpart);
                for (var i = 0; i < 100; i++) {

                }
            }
        }
    }
}

function myproblem5() {
    /* console.log("Test");
     var primeList = [2],
         k = [],
         count = 0;
     for (var i = 2; i < 100; i++) {
         for (var j = 2; j < primeList.length; j++) {
             if (i % j == 0) {
                 k[j] = 1;
                 console.log("k[j] " + k[j]);
             } else
                 k[j] = 0;
             console.log("ELSE k[j] " + k[j]);

         }
         console.log("For; " + i);
         if (k.reduce == 0) {
             primeList.push(i);
             console.log(primeList);
         }
     }
     */
}

function tenThousanFirstPrime() {
    //console.log("myproblem7");
    var primeList = [];
    //    primeList.length = 10001;
    var divisible = false;
    for (var i = 2; i <= 10001; i++) {
        divisible = false;
        for (var j = 0; j <= primeList.length; j++) {
            if (i % primeList[j] == 0) {
                divisible = true;
                //console.log("Not prime. i= " + i);
                break;
            }
        }
        if (divisible == false)
            primeList.push(i);
    }
    console.log(primeList);
    console.log(primeList[primeList.length - 1]);
    return primeList[primeList.length - 1];
}
tenThousanFirstPrime();

function Selfpowers() {
    var temp = 0,
        calc = 0;

    for (var i = 1; i <= 1000; i++) {
        temp = 0;
        temp = (i * i);
        while (true) {
            temp = temp % 10;
            console.log("i: " + i + " temp:" + temp);
            calc = calc + temp;
            console.log("temp: " + temp + " -- calc: " + calc);
            break;
        }

    }
}