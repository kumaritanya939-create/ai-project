/*Q12. Longest substring without repeating characters 

Input: 

let str = "abcabcbb"; */

let str = "abcabcbb";

let longest = "";

for (let i = 0; i < str.length; i++) {

    let current = "";

    for (let j = i; j < str.length; j++) {

        if (current.includes(str[j])) {
            break;
        }

        current += str[j];

        if (current.length > longest.length) {
            longest = current;
        }
    }
}

console.log("Longest substring:", longest);
console.log("Length:", longest.length);

 