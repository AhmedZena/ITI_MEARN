import { Rectangle, Square, Circle } from "./shapeClasses.js";

let rectangle = new Rectangle("Rectangle", 5, 10);
console.log(rectangle.toString());

let square = new Square("Square", 5);
console.log(square.toString());

let circle = new Circle("Circle", 5);
console.log(circle.toString());

// 3
function* fibonacci1(n) {
  let a = 0,
    b = 1,
    nextTerm;
  for (let i = 0; i < n; i++) {
    yield a;
    nextTerm = a + b;
    a = b;
    b = nextTerm;
  }
}

let fib1 = fibonacci1(10);
// console.log(...fib1);
// console.log(fib1);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);

// 4)

let obj = {
  name: "Ahmed",
  age: 30,
  address: "123 Main St.",
};

obj[Symbol.iterator] = function () {
  let keys = Object.keys(obj); // ["name", "age", "address"]
  //   let keys = Object.Keys(obj); // ["name", "age", "address"]
  let index = 0;
  return {
    next: function () {
      let key = keys[index]; // "name"
      index++; // 1
      return {
        value: obj[key], // "Ahmed"
        done: index > keys.length, // false
      };
    },
  };
};

for (let prop of obj) {
  console.log(prop);
}
