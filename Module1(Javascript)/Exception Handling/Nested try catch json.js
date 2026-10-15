
function readUser(data) {
    try {
        console.log("Reading user data...");

        try {
            let user = JSON.parse(data);
            console.log("Name:", user.name);
        } catch (error) {
            console.log("JSON Error:", error.message);
        }

        console.log("Function continues");

    } catch (error) {
        console.log("General Error:", error.message);
    }
}

readUser('{"name":"Amit"}');
readUser('{"name":Amit}');
//The exact JSON error message may vary by browser. In the second call,
//  parsing fails because Amit is not enclosed in double quotes.