// An Array literal
const colors = ["Red", "Green", "Blue"];
console.log(colors)

// array methods
// pop()
const alphabets = ["a", "b", "c", "d", "e", "f"];
alphabets.pop()

// push()
alphabets.push("g");
console.log(alphabets)

// shift
alphabets.shift();
console.log(alphabets)

// unshift
alphabets.unshift("g");
console.log(alphabets)

// splice()
alphabets.splice(1, 0, "g", "h", "i")
console.log(alphabets)

// slice()
alphabets.slice(1, 4);
console.log(alphabets)