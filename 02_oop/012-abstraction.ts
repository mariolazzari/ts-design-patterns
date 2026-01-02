// shapes
interface Shape {
  area(): number;
  perimeter(): number;
}

export class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return this.radius ** 2 * Math.PI;
  }

  perimeter(): number {
    return 2 * this.radius * Math.PI;
  }
}

export class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.height * this.width;
  }

  perimeter(): number {
    return 2 * (this.height + this.width);
  }
}

export function computeArea(shape: Shape) {
  return shape.area();
}

export function computePerimeter(shape: Shape) {
  return shape.perimeter();
}
