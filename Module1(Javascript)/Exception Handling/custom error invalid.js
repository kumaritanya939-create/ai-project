
function checkNumber(num) {
    try {
        if (typeof num !== "number" || Number.isNaN(num)) {
            throw new Error("Input must be a valid number!");
        }

        console.log("Valid number:", num);
    } catch (error) {
        console.log("Custom Error:", error.message);
    }
}

checkNumber(25);
checkNumber("Hello");
checkNumber(-10);
