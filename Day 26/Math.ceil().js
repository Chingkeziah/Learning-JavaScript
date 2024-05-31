// syntax
Math.ceil(number);

// Example
Math.ceil(1.2);

// Exercise
/*Question:

Write a JavaScript function that calculates the number of boxes needed to pack a given number of items,
where each box can hold a maximum of 10 items.
Use the Math.ceil() method to ensure that any remaining items are packed into an additional box.

Instructions:

Create a function named calculateBoxes that takes a single argument items,
which represents the total number of items to be packed.
Inside the function, use the Math.ceil() method to calculate the total number of boxes required.
Return the total number of boxes from the function.
*/
function calculateBoxes(items) {
    const itemsPerBox = 10;
    return Math.ceil(items / itemsPerBox);
  }
  calculateBoxes(29);
  