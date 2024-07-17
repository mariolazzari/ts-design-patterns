// shapes
interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return this.radius ** 2 * Math.PI;
  }

  perimeter(): number {
    return 2 * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.height * this.width;
  }

  perimeter(): number {
    return 2 * (this.height + this.width);
  }
}

function computeArea(shape: Shape) {
  return shape.area();
}

function computePerimeter(shape: Shape) {
  return shape.perimeter();
}

const circle = new Circle(10);
const rectangle = new Rectangle(10, 5);

console.log("Circle area    :", computeArea(circle));
console.log("Rectangle area :", computeArea(rectangle));

console.log("Circle perimeter    :", circle.perimeter());
console.log("Rectangle perimeter :", rectangle.perimeter());

const now = new Date();
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate();
console.log(currentDate, currentMonth, currentYear);
