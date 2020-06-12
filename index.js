//Creating a class
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old and works as a ${this.occupation}`;
     } 
};

//Creating a new instance of that class
const person1 = new Person('John', '40', 'developer');

//Calling a method on the class instance
// console.log(person1.getInfo());

// console.log(navigator.appVersion);
// console.log(Object.values(person1));
// console.log(Object.keys(person1));

//Prototypes examples
Person.prototype.changeOccupation = function(newOccupation) {
    this.occupation = newOccupation;
    return `${this.name} is now working as a ${newOccupation}`;
};

console.log(person1.changeOccupation('doctor'));

Person.prototype.getAge = function() {
    return `${this.name} is ${this.age} years old.`
};

console.log(person1.getAge());