// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var change = {};
    if (currency > 10000) {
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } else if (currency <= 0) {
        return change;
    }
    var n = d = q = h = p = 0;
    var number = currency;
    if(number >= 50) {
        h = Math.floor(number / 50);
        number = number % 50;
    }
    if (number >= 25) {
        q = Math.floor(number / 25);
        number = number % 25;
    }
    if (number >= 10) {
        d = Math.floor(number / 10);
        number = number % 10;
    }
    if (number >= 5) {
        n = Math.floor(number / 5);
        number = number % 5;
    }
    if (number >= 1) {
        p = Math.floor(number / 1);
    }

    if (p !== 0) {
        change.P = p;
    }
    if (n !== 0) {
        change.N = n;
    }
    if (d !== 0) {
        change.D = d;
    }
    if (q !== 0) {
        change.Q = q;
    }
    if (h !== 0) {
        change.H = h;
    }

    return change;
}
