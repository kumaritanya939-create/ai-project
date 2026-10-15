/*1. Variables and Data Types — Basic

Create variables for:

Student name
Age
CGPA
Is the student enrolled?
Phone number not provided yet

Print each value and its data type using typeof.*/

let name = "Rahul";
let age = 21;
let cgpa = 8.5;
let isEnrolled = true;
let phone;

console.log(name, typeof name);
console.log(age, typeof age);
console.log(cgpa, typeof cgpa);
console.log(isEnrolled, typeof isEnrolled);
console.log(phone, typeof phone);

//let vs const

//2.Predict the output:

let x = 10;
const y = 20;

x = 30;

console.log(x);
console.log(y);

/*3.typeof — Find the Data Types

What will be the output?*/

let a = "100";
let b = 100;
let c = true;
let d = null;
let e;
let f = 100n;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);


/*4. Strict Equality

Predict the output:*/

console.log(10 == "10");
console.log(10 === "10");
console.log(10 === 10);
console.log(true === 1);


/*5. Logical Operators

Write a program that checks whether a student is eligible for an exam.

Conditions:

Attendance must be at least 75%
Marks must be at least 40*/

let attendance = 80;
let marks = 55;

if (attendance >= 75 && marks >= 40) {
    console.log("Eligible for exam");
} else {
    console.log("Not eligible for exam");
}
/*6.OR and NOT

Given:

let isWeekend = false;
let isHoliday = true;

Print "Day off" if it is either a weekend OR a holiday.*/

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Day off");
}

/*7. ES6 Template Literals

Create variables:

name = "Amit"
age = 22
course = "B.Tech"

Print:

My name is Amit. I am 22 years old and studying B.Tech.*/

const name = "Amit";
const age = 22;
const course = "B.Tech";

console.log(`My name is ${name}. I am ${age} years old and studying ${course}.`);

/*8. Multiplication Table

Take a number and print its multiplication table from 1 to 10.*/
const num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${num} × ${i} = ${num * i}`);
}
/*9. BigInt

Create two BigInt variables:

a = 9007199254740992
b = 9007199254740993

Check whether they are equal.*/

const a = 9007199254740992n;
const b = 9007199254740993n;

console.log(a === b);

/*10. Challenge — Data Type + Equality

Predict the output:*/

let a = 10;
let b = "10";
let c = 10n;

console.log(a == b);
console.log(a === b);

console.log(a == c);
console.log(a === c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

/*11. Challenge — Student Eligibility

Write a program using variables and logical operators.

A student is eligible for a scholarship when:

CGPA ≥ 8
Attendance ≥ 75%
AND the student is enrolled.
Given
let cgpa = 8.5;
let attendance = 80;
let isEnrolled = true;*/

let cgpa = 8.5;
let attendance = 80;
let isEnrolled = true;

if (cgpa >= 8 && attendance >= 75 && isEnrolled === true) {
    console.log("Eligible for scholarship");
} else {
    console.log("Not eligible for scholarship");
}

