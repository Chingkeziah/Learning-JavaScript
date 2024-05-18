const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter(evenNumbers);

function evenNumbers(numbers){
    return numbers % 2 === 0;
}
console.log(newArray);


const age = [18, 19, 20, 21]
const newAge = age.filter(display);
function display(age){
    let newAge = document.getElementById('userage');
    newAge.textContent = age.filter(display);
    return age <= 21;
}
console.log(newAge);