/*Q11. Find all occurrences of a substring 

Given: 

let text = "JavaScript is great. I love JavaScript."; 
let search = "JavaScript"; */

let text = "JavaScript is great. I love JavaScript.";
let search = "JavaScript";

let index = 0;

while ((index = text.indexOf(search, index)) !== -1) {

    console.log("Found at index:", index);

    index += search.length;
}