// objects can be refered to as a collection of related data that represent a real world entity or concept.
// in js, objects can be written in three ways
// oject using the object constructor
var user = new object();
user.name = "Keziah Ching";
user.age = 21;
user.email = "chingkeziah@gmail.com";
user.address = "Bamenda, Cameroon";
user.isSingle = false;


// normal format
const profile = {
            name: "Keziah Ching",
            age: 21,
            address: "Bamenda, Cameroon",
            email: "chingkeziah@gmail.com",
            isSingle: true
    }
// using the constructor or class keyword
class info {
    constructor() {
        this.name = "kezy";
        this.email = "kezy@yahoo.com"
        this.isMarried = false;
    }
}
// you can access object properties using two syntax namely;
// objectName.propertyName or objectName["propertyName"]



// Object Methods
// this refers to a function found inside of an object
const person={
    lastName: "Ching",
    firstName: "Keziah",
    age: 21,
    isMarried: false,
    country: "Cameroon",
    fullName: function() {
      return person.firstName + " " + person.lastName;
    }
  };
  console.log(person);

//   can be accessed using two ways
person.fullName()
person.fullName; //however acesses only the function definition