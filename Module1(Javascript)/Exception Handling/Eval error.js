
try {
    throw new EvalError("Something went wrong with eval!");
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
