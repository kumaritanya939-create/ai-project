/*Q3. Remove duplicate characters 

Input: 

let str = "programming";*/

let str = "programming";
let result = "";

for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}

console.log(result);