/*Q5. Find the longest word in a sentence 

Given: 

let sentence = "JavaScript is a powerful programming language";*/

let sentence = "JavaScript is a powerful programming language";

let words = sentence.split(" ");
let longest = "";

for (let word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}

console.log("Longest word:", longest);