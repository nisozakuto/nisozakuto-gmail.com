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