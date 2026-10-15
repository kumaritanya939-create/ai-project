//Getter allows you to access a method like a property.
class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

const s1 = new Student("Rahul");

console.log(s1.name);
//Notice that we use s1.name, not s1.name().