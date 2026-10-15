
let data = '{"name":"Rahul", age:25}';

try {
    let user = JSON.parse(data);
    console.log(user);
} catch (error) {
    console.log(error.name);
    console.log("JSON parsing failed!");
}
//The property age is missing double quotes around its key, making the JSON invalid.