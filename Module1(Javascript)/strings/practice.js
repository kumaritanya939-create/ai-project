const greet = function(name) {
    return "Hello " + name;
};

console.log(greet("Nitin"));

//Hoisting
greet();

function greet() {
    console.log("Hello");
}
// not Hoisted
const greet = function() {
    console.log("Hello");
};
// NO parameter
const greet = () => {
    console.log("Hello");
};

greet();

// One Parameter
const greet = name => {
    return "Hello " + name;
};

// With two or more parameters
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

//Function as an Argument — Callback
function greet(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    callback("Nitin");
}

processUser(greet);

//Example-2 callback
function add(a, b) {
    return a + b;
}

function calculate(x, y, operation) {
    return operation(x, y);
}

console.log(calculate(10, 20, add));

//Returning a Function — Closure
function outer() {

    function inner() {
        console.log("Hello");
    }

    return inner;
}

const result = outer();

result();

//Closures
// returns-a-function.js

function multiplyBy(x) {
    return n => n * x;
}

const double = multiplyBy(2);

double(5); // → 10