
let data = '{"name":"Rahul","age":25}';

try {
    let user = JSON.parse(data);

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}
//JSON.parse() converts the string into an object, allowing you to access user.name and user.age.