/*Q8. Find the first non-repeating character 

Input: 

let str = "aabbcddee";*/

let str = "aabbcddee";

for (let ch of str) {

    let count = 0;

    for (let c of str) {
        if (ch === c) {
            count++;
        }
    }

    if (count === 1) {
        console.log("First non-repeating character:", ch);
        break;
    }
}