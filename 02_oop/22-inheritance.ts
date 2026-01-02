class Animal {
  constructor(private name: string) {}

  move(distance: number): string {
    return `${this.name} moved ${distance} meters`;
  }
}

export class Dog extends Animal {
  constructor(name = "dog") {
    super(name);
  }
}

class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}

  display(): string {
    return `ID: ${this.id}, Price: ${this.price}, Description: ${this.description}`;
  }
}

export class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public title: string,
    public author: string
  ) {
    super(id, price, description);
  }

  display(): string {
    super.display();
    return `Title: ${this.title}, Author: ${this.author}`;
  }
}

export class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }

  display(): string {
    return `Brand: ${this.brand}, Model: ${this.model} (${super.display()})`;
  }
}
