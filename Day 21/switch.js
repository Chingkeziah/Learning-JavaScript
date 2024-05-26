// syntax to get day
let day = new Date().getDay();
// leaving dayName undefined or without a value because we want the switch statement
// to determine the appropriate value for it
let dayName;

switch(day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Today is " + dayName);

// taking another example

let fruit = "man";

switch(fruit) {
    case "banana":
    case "apple":
    case "orange":
        console.log(fruit + " is a fruit.");
        break;
    case "carrot":
    case "potato":
        console.log(fruit + " is a vegetable.");
        break;
    default:
        console.log("Unknown food.")
}

// created my own example
let age = 35;
switch(age){
    case 10: 
    console.log("minor")
    break;
    case 21:
    console.log("adult")
    break;
    case 60:
    console.log("old")
    break;
    default: 
    console.log("Invalid age group");
}