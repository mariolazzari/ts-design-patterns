interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Woof woof");
  }
}

class Cat implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Meaw meaw");
  }
}

let dog: Dog = new Dog("dog");
dog.makeSound();

let cat: Cat = new Cat("cat");
cat.makeSound();
