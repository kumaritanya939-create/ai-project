class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Rahul", 20);
const student2 = new Student("Priya", 22);

console.log(student1.name);
console.log(student2.name);

/*this.name refers to the name property of the new object being initialized.

name is the value passed as an argument.

Each object stores its own value.*/