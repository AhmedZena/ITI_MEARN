// 1)

let handler = {
  set: function (obj, prop, value) {
    if (prop === "name") {
      if (typeof value !== "string" || value.length !== 7) {
        throw new Error("Name must be a string of 7 characters");
      }
    }
    if (prop === "address") {
      if (typeof value !== "string") {
        throw new Error("Address must be a string");
      }
    }
    if (prop === "age") {
      if (typeof value !== "number" || value < 25 || value > 60) {
        throw new Error("Age must be a number between 25 and 60");
      }
    }
    obj[prop] = value;
    return true;
  },
};

let person = new Proxy({}, handler);
person.name = "Ah Zena";
person.address = "123 Main St.";
person.age = 26;
console.log(person);

let person2 = new Proxy({}, handler);
// person2.name = "Ahmed";
person2.address = "23";
person2.age = 29;
console.log(person2);

// 2)
class Shape {
  constructor(name) {
    this.name = name;
  }
  calculateArea() {}
  calculateParameter() {}
  toString() {
    return `The name is ${
      this.name
    }area  is ${this.calculateArea()} and the parameter is ${this.calculateParameter()}`;
  }
}

class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
  calculateParameter() {
    return 2 * (this.width + this.height);
  }

  //   toString() {
  //     return `name is ${
  //       this.name
  //     } area is ${this.calculateArea()} and the parameter is ${this.calculateParameter()}`;
  //   }
}

let rectangle = new Rectangle("Rectangle", 5, 10);
console.log(rectangle.toString());

class Square extends Shape {
  constructor(name, side) {
    super(name);
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }

  calculateParameter() {
    return 4 * this.side;
  }

  //   toString() {
  //     return `The area of ${
  //       this.name
  //     } is ${this.calculateArea()} and the parameter is ${this.calculateParameter()}`;
  //   }
}

let square = new Square("Square", 5);
console.log(square.toString());

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculateParameter() {
    return 2 * Math.PI * this.radius;
  }

  toString() {
    return `The area of ${
      this.name
    } is ${this.calculateArea()} and the parameter is ${this.calculateParameter()}`;
  }
}

let circle = new Circle("Circle", 5);
console.log(circle.toString());

// 3)

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
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
console.log(fib1.next().value);
