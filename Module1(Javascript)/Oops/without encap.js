class Student {
    constructor(name) {
        this.name = name;
    }
}

const s1 = new Student("Rahul");

console.log(s1.name); // Rahul

s1.name = "Amit"; 
console.log(s1.name); // Amit