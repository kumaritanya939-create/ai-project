// returns-a-function.js

function multiplyBy(x) {
    return n => n * x;
}

const double = multiplyBy(2);

double(5); // → 10