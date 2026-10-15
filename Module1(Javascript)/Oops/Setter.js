//Setter allows you to change a property's value.
class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const s1 = new Student("Rahul");

s1.name = "Amit";

console.log(s1.name);