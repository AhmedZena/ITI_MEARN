// TASK 1

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   Rectangle.increamentCounter();
// }

// Rectangle.counter = 0;

// Rectangle.increamentCounter = function () {
//   Rectangle.counter++;
// };

// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// };
// Rectangle.prototype.getPerimeter = function () {
//   return (this.width + this.height) * 2;
// };

// console.log(Rectangle.prototype);
// Rectangle.prototype.toString = function () {
//   return `Rectangle: width=${this.width}, height=${
//     this.height
//   }  , area=${this.getArea()}, perimeter=${this.getPerimeter()}`;
// };

// let rect1 = new Rectangle(3, 4);
// console.log(rect1);
// console.log(rect1.getArea());
// console.log(rect1.getPerimeter());
// console.log(rect1.toString());

// let rect2 = new Rectangle(10, 20);
// console.log(rect2.getArea());
// console.log(rect2.getPerimeter());
// console.log(rect2.toString());

// TASK 2

function Shape() {
  //   console.log(this.constructor);
  if (this.constructor === Shape) {
    throw new Error("Shape cannot be instantiated directly.");
  }
}

// Rectangle constructor
function Rectangle(width, height) {
  console.log(Rectangle.instance);
  if (Rectangle.instance) {
    throw new Error("Rectangle instance already created.");
  }
  Shape.call(this); // Call Shape constructor
  this.width = width;
  this.height = height;

  Rectangle.incrementCounter();
  Rectangle.instance = this;
}
// Make counter for Rectangle
Rectangle.counter = 0;
Rectangle.incrementCounter = function () {
  Rectangle.counter++;
};
// Inherit from Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
// Rectangle methods
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};
Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

// Square constructor
function Square(size) {
  if (Square.instance) {
    throw new Error("Square instance already created.");
  }

  // Call Rectangle constructor, but bypass its instance check
  Shape.call(this); // Call Shape constructor
  this.width = size;
  this.height = size;

  Rectangle.incrementCounter(); // Increment Rectangle's counter for Square
  Square.instance = this;
}

// Inherit from Rectangle
Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

let rect1 = new Rectangle(3, 4);
// console.log(rect1);

let rect2 = new Rectangle(10, 20);
// console.log(rect2);

// let square1 = new Square(5);
// console.log(square1);

// let square2 = new Square(10);
// console.log(square2);
