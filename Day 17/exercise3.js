// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

let numbers = [0, -1, 4];

// a - b sorts them in ascending order while b - a sorts in descending order

numbers.sort((a, b) => a - b);
alert(numbers);