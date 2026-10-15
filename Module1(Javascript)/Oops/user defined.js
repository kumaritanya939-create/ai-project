class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const s1 = new Student("Rahul", 20);

const s2 = new Student(s1.name, s1.age);

console.log(s2.name);
console.log(s2.age);