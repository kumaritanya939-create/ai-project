/*Q1. Count vowels, consonants, digits and special characters
let str = "Hello JavaScript 2026!";

Write a program to analyze:*/

let str = "Hello JavaScript 2026!";

let vowels = 0;
let consonants = 0;
let digits = 0;
let special = 0;

for (let ch of str) {

    if ("aeiouAEIOU".includes(ch)) {
        vowels++;
    }
    else if (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z") {
        consonants++;
    }
    else if (ch >= "0" && ch <= "9") {
        digits++;
    }
    else if (ch !== " ") {
        special++;
    }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);
console.log("Digits:", digits);
console.log("Special characters:", special);