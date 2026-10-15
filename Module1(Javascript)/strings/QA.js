//Question 1
function calculateArea(length, width) {
    return length * width;
}

let area = calculateArea(10, 5);

console.log(area);

//Question 2
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(17));

//Question 3
const findMax = function(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};

console.log(findMax(25, 40));

//Question 4
const square = (num) => {
    return num * num;
};

console.log(square(7));

//Question 5
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, multiply));

//Question 6

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());