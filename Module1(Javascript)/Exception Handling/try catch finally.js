
try {
    console.log("Inside try");
    throw new Error("Something went wrong");
} catch (error) {
    console.log("Inside catch:", error.message);
} finally {
    console.log("Inside finally");
}
