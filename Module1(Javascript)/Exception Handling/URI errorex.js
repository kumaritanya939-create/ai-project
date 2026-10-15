
try {
    let result = decodeURIComponent("Hello%20World");
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
}
