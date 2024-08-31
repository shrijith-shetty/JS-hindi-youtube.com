const n = 100;
console.log(n); // Output: 100

const n1 = new Number(150);
console.log(n1); // Output: [Number: 150]

console.log(n1.toString()); // Output: "150"
console.log(n1.toString().length); // Output: 3

console.log(n.toFixed(10)); // Output: "100.0000000000"

const prec = 123.74324;
console.log(prec.toPrecision(3)); // Output: "124"

const hundres = 10000000;
console.log(hundres.toLocaleString('en-In')); // Output: "1,00,00,000"

//_______________MATH_________________________

console.log(Math); // Output: [Math Object with various methods]
console.log(Math.abs(-5)); // Output: 5
console.log(Math.round(5.9)); // Output: 6
console.log(Math.ceil(4.5)); // Output: 5
console.log(Math.floor(5.9)); // Output: 5
console.log(Math.max(5, 3, 4, 3, 56, 6)); // Output: 56
console.log(Math.min(1, 5, 2, 6, 2, 6)); // Output: 1

console.log(Math.random()); // Output: Random number between 0 and 1, e.g., 0.5743172690636715
console.log(Math.random() * 10); // Output: Random number between 0 and 10, e.g., 7.84931056242103
console.log(Math.random() * 10 + 1); // Output: Random number between 1 and 11, e.g., 4.564739256129747
const min = 10;
const max = 100;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random integer between 10 and 100, e.g., 35
