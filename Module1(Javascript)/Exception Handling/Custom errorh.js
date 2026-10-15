
function checkNumber(num) {
    try {
        if (num > 0) {
            console.log("Positive Number");
        } else if (num < 0) {
            console.log("Negative Number");
        } else {
            console.log("Zero");
        }
    } catch (error) {
        console.log("Error:", error.message);
    }
}

checkNumber(10);
checkNumber(-5);
checkNumber(0);
