/*Q10. Compress a string 

This is a good B.Tech-level challenge. 

Input: 

let str = "aaabbccccd";*/

let str = "aaabbccccd";
let result = "";

let count = 1;

for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
        count++;
    } 
    else {
        result += str[i] + count;
        count = 1;
    }
}

console.log(result);