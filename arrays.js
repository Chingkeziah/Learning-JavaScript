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

// concat()
const consonants = ["b", "c", "d", "f", "g"];
const vowels = ["a", "e", "i"];
const alph = consonants.concat(vowels);
console.log(alph)


// Array properties
// length
alphabets.length

// constructor
console.log(alphabets.constructor);

// isArray
console.log(Array.isArray(arrayName))