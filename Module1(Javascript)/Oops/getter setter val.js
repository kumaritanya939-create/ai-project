//Getters and setters with validation
//This is especially useful for encapsulation because we can prevent invalid values.

class Student {
    #age;

    constructor(age) {
        this.#age = age;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        if (value >= 1 && value <= 100) {
            this.#age = value;
        } else {
            console.log("Invalid age!");
        }
    }
}

const s1 = new Student(20);

console.log(s1.age); // 20

s1.age = 25;
console.log(s1.age); // 25

s1.age = -5;         // Invalid age!
console.log(s1.age); // 25

//The private field #age cannot be accessed directly from outside the class. 
// The setter validates new values before updating it.