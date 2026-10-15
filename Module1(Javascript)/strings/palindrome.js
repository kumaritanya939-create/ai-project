/*Q7. Check palindrome ignoring spaces and case 

Input: 

let str = "A man a plan a canal Panama"; */

let str = "A man a plan a canal Panama";

let clean = str.toLowerCase().replaceAll(" ", "");

let reverse = clean.split("").reverse().join("");

if (clean === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not palindrome");
}