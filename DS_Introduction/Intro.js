//ES2015 Class

// Class- A blueprint for creating objects with pre-defined properties and methods
// Constructor- method to create new objects
// Instanciate values to the class using new keyword



class Student{
    constructor(firstName, lastName, middleName){
        this.firstName= firstName;
        this.lastName=lastName;
        this.middleName=middleName;
    }
}

let firstName= new.Student("sai", "teja", "tirumali");
let SecondName= new.Student("nani", "nani", "sai");
let middleName= new.Student("nani", "nani", "nani");

// Adding instance method
