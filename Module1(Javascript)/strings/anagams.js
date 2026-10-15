/*Q4. Check whether two strings are anagrams 

Two strings are anagrams if they contain the same characters with the same frequency. 

Example: 

"listen" 
"silent" */

let str1 = "listen";
let str2 = "silent";

let a = str1.toLowerCase().split("").sort().join("");
let b = str2.toLowerCase().split("").sort().join("");

if (a === b) {
    console.log("Anagram");
} else {
    console.log("Not anagram");
}