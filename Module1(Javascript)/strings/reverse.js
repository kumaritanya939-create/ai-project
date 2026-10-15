/*Q6. Reverse each word without reversing the sentence 

Input: 

let sentence = "JavaScript is powerful"; */

let sentence = "JavaScript is powerful";

let words = sentence.split(" ");
let result = [];

for (let word of words) {
    result.push(word.split("").reverse().join(""));
}

console.log(result.join(" "));