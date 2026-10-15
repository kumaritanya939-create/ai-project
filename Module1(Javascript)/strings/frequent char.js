/*Q2. Find the most frequent character

Given:

let str = "programming";

Find the character that occurs most frequently.

Expected:

Most frequent character: r
Frequency: 2*/

let str = "programming";
let maxChar = "";
let maxCount = 0;

for (let ch of str) {

    let count = 0;

    for (let c of str) {
        if (ch === c) {
            count++;
        }
    }

    if (count > maxCount) {
        maxCount = count;
        maxChar = ch;
    }
}

console.log("Most frequent character:", maxChar);
console.log("Frequency:", maxCount);