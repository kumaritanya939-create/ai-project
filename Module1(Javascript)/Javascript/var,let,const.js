/*
let → value can be changed
const → value cannot be reassigned
var → older way; generally avoided in modern JavaScript

*/

let age = 25;
const name = "Rahul";
var city = "Delhi";

console.log(age);
console.log(name);
console.log(city);

//let

let score = 50;

score = 80;

console.log(score);  // 80


//const

const pi = 3.14159;

// pi = 3.14;  // Error

//Var

var x = 10;
x = 20;

console.log(x);  // 20