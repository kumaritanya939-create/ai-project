/*Q9. Capitalize the first letter of every word 

Input: 

let sentence = "javascript is a programming language"; */

let sentence = "javascript is a programming language";

let words = sentence.split(" ");
let result = [];

for (let word of words) {
    let newWord = word[0].toUpperCase() + word.slice(1);
    result.push(newWord);
}

console.log(result.join(" "));

 