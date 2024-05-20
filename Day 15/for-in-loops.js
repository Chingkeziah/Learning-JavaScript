// demonstrating using the key keyword which refers to properties in an object
const person = {
    name: "kez",
    age: 21,
    contry: "Cameroon",
}
for(key in person){
    console.log(key + ":" + person[key]);
}

// you can create a variable and store the object properties in it while
// user[a] gives us its values
const user = {
    name: "keziah",
    age: 21,
    country: "Cameroon",
}
for(const a in user){
   console.log(a + ": " + user[a]);
}
