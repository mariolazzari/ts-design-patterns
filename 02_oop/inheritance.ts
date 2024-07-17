class Animal {
  constructor(private name: string) {}

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters`);
  }
}

class Dog extends Animal {
  constructor(name = "dog") {
    super(name);
  }
}

const myDog = new Dog();
myDog.move(5);

class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string
  ) {}

  display(): void {
    console.log(
      `ID: ${this.id}, Price:  ${this.price}, Description: ${this.description}`
    );
  }
}

class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public title: string,
    public author: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Title: ${this.title}, Author:  ${this.author}`);
  }
}

class Electronic extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public brand: string,
    public model: string
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Brand: ${this.brand}, Model:  ${this.model}`);
  }
}

const myBook = new Book(
  "id1",
  10,
  "My book description",
  "Book title",
  "Book Author"
);
myBook.display();

const myPc = new Electronic(
  "id2",
  1000,
  "My PC description",
  "PC Brand",
  "PC Model"
);
myPc.display();
