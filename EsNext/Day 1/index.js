// 1)
let a = 10;
let b = 20;

console.log(`a = ${a}, b = ${b}`);
[a, b] = [b, a];

console.log(`a = ${a}, b = ${b}`);

// 2)
function check(...args) {
  return `The largest number is ${Math.max(...args)}
  he smallest number is ${Math.min(...args)}
  `;
}

console.log(check(1, 2, 3, 4, 5));
console.log(check(5, 6, 7, 8, 9, 10));
console.log(check(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 3)
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

// a) by function
function isString(element) {
  return typeof element === "string";
}

console.log(fruits.every(isString));

// b) by  function
function startsWithA(element) {
  return element.startsWith("a");
}

console.log(fruits.some(startsWithA));

// c) by  function
function startsWithBOrS(element) {
  return element.startsWith("b") || element.startsWith("s");
}

console.log(fruits.filter(startsWithBOrS));

// d) by  function
function likeFruit(element) {
  return `I like ${element}`;
}

console.log(fruits.map(likeFruit));

// e) by  function

fruits.forEach((element) => console.log(`I like ${element}`));
