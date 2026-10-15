
try {
    console.log("Outer try started");

    try {
        let result = x + 10;
        console.log(result);
    } catch (error) {
        console.log("Inner error:", error.message);
    }

    console.log("Outer try continues");

} catch (error) {
    console.log("Outer error:", error.message);
}
