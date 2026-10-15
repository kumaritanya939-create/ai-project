// Anonymous  function
const add = function(a, b) {
  return a+b;
}

console.log("Anonymous Function -> ", add(4, 5));

// Arrow Function
const minus = (a, b) => {
  return a-b;
}

console.log("Arrow Function ->", minus(4, 5));

// one line function

const multiplication = (a, b)=> a*b;

// function multiplication(a, b){
//     return a*b;
// }

console.log("One line function => ", multiplication(3, 5) );

// get squares of given values using foreach
let arr = [2, 3, 6, 7 ,8];
arr.forEach((a) => console.log(`Square of ${a} => ` , a*a));

// get squares of given values using foreach

let arra = [2, 3, 6, 7 ,8];
let nsquares = arra.map((a) => {
    return a*a;
});
console.log("Using Map Function=>", nsquares);

// Reduce Function with spread(...) variable syntax 

function addition(...nums){
    return nums.reduce((acc, value) => acc+value);
}

console.log("Addition of numbers => ", addition(2, 3 , 4 , 5, 6 ,7, 6));

// Filter function
function filterArray(...nums){
    return nums.filter((value) => value > 3 && value < 6);
}
console.log("Filter of numbers => ", filterArray(2, 3 , 4 , 5, 6 ,7, 6));




