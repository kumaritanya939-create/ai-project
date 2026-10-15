const student = {
    name: "Rahul",
    age: 22,

    showDetails: function() {
        console.log(this.name);
        console.log(this.age);
    }
};

student.showDetails();