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
}

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

  //   toString() {
  //     return `The area of ${
  //       this.name
  //     } is ${this.calculateArea()} and the parameter is ${this.calculateParameter()}`;
  //   }
}

export { Rectangle, Square, Circle };
