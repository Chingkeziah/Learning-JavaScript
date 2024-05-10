// the this keyword can refer to an object forexample;
const car = {
    color: "pink",
    model: "2024",
    name: "GLE",
    sentence: function(){
        return "I have a" + " " + this.color + " " + this.name + this.model
        }
};
car.sentence();

// In a regular function
function greet(){
    console.log(this)
}
// refers to the window object