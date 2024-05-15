// explaining the element parameter
let number = [1, 2, 3, 4, 5];
number.forEach(multiply);
number.forEach(display);
    function multiply(element, index, array) {
        array[index] = element*2;
    }
function display(element){
    console.log(element)
}

// exercise i used to understand the forEach() method

let fruits = ["mango", "apple", "orange"];

fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}
