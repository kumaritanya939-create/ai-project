
let age = 15;

try {
    if (age < 18) {
        throw new Error("You must be 18 or older!");
    }

    console.log("Access granted");
} catch (error) {
    console.log(error.message);
}

console.log("Program continues");
