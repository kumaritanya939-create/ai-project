//JavaScript supports private properties using the # symbol.
class Student {
    #name;

    constructor(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName) {
        this.#name = newName;
    }
}

const s1 = new Student("Rahul");

console.log(s1.getName()); // Rahul

s1.setName("Amit");
console.log(s1.getName()); // Amit

// console.log(s1.#name); // SyntaxError