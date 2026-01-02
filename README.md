# TypeScript Design Patterns

[Github](https://github.com/manikbajaj/typescript-design-patterns)
[Notes](https://cloudaffle.com/series/typescript-design-patterns/what-are-design-patterns/)

## Intro

### What are design patterns

Design patterns are reusable solutions to common problems.

- Tested soltutions
- Better comunication
- Best practices

### Design patttern types

- Creational: object creation
- Structural: composition on objects
- Behavioral: comunication between objects

## OOP

### Objects

OOP uses objects in order to structure and organize code.

### Abstraction

Process of simplifyng complex systems by breaking them into smaller components, by exposing only essential features to user (implementation hidding).

- class: blueprint for object creation
- interface: enforce class structure

ex: [TypeORM](https://typeorm.io/)

```ts
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
```

### Encapsulation

Promotes separation of concerns and data hiding.

```ts
class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public get balance() {
    return this._balance;
  }

  public deposit(amount: number): void {
    if (amount < 0) {
      throw new Error("Invalid deposit amount");
    }

    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      throw new Error("Invalid withdrawal amount");
    }

    if (this._balance - amount < 0) {
      throw new Error("Insufficient funds");
    }

    this._balance -= amount;
  }
}
```

### Polymorphism

It enables a single interface or method to work with different types.

- Parameters
- Generics
- Ad hoc

ex: [ExpressJS](https://expressjs.com/)

### Inheritance

Allows to inherit attributes and methods from another class, promoting reusability and modularity.

```ts
class Animal {
  constructor(private name: string) {}

  move(distance: number): string {
    return `${this.name} moved ${distance} meters`;
  }
}

class Dog extends Animal {
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

  display(): string {
    super.display();
    return `Title: ${this.title}, Author: ${this.author}`;
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

  display(): string {
    return `Brand: ${this.brand}, Model: ${this.model} (${super.display()})`;
  }
}
```

## SOLID design principles

### Intro

Foundation for design patterns basing on following principle:

- Single responsability
- Open closed
- Liskov substution
- Interface segregation
- Dependency inversion

### Single responsibility

Minimize impact on changing by isolating it.
A class must bring one only responsability.

```ts
class User {
  constructor(name: string, email: string) {}
}

// user auth needs to be in a dedicated class, not in User one.
class UserAuth {
  constructor(user: User) {}

  authenticate(password: string) {}
}

class BlogPost {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }

  createPost() {}
  updatePost() {}
  deletePost() {}

  //   displayPost() {
  //     return `<h1>${this.title}</h1><p>${this.text}</p>`;
  //   }
}

class BlogPostDisplay {
  constructor(public post: BlogPost) {}

  displayHTML() {
    return `<h1>${this.post.title}</h1><p>${this.post.text}</p>`;
  }

  displayJSON() {
    return JSON.stringify(this.post);
  }
}
```

### Open close

Classes, functions and interfaces must be open for extension, but closed for modification.

- increase reusability
- decrease bugs
- simpler update process
- simpler patching

```ts

```

### Liskov substitution

Is S extends T, objects of type T can be replaced with objects of type S, without altering any properties.

- Code reusability
- More robustness

### Interface segregation

No client should depend on interfaces they do not use.
Do not add methods to existing interface: create new interface.

- Improve encapsulation
- Reduced impact on changes

### Dependency inversion

High level module should not depend on low level module.
Abstraction should not depends on detail.

- Code reusability
- Scalability
- Decoupling

## Creational design patterns

Objects creation mechanisms in order to control object creation process.

### Singleton

A class has only one instance, with a global access point to this instance.

#### When to use

- File access
- Performance
- Configuration
- Thred safety

#### Caveats

- Global state
- Testing
- Subclassing

#### Use cases

- Caching
- Service Proxies
- Shared resources (DB connections)
- Configuration settings
- Logging

### Prototype

Clone objects of any complexity without coupling.

#### When to use

- Complex objects creation
- High cost object creation
- Similar objects
- Dynamic typing
- Prevent object history

#### Pros

- Avoid reference errors
- Efficent cloning
- Runtime modifications
- Simpler object creation

#### Cons

- Shallow vs Deep copying

#### Use cases

- Graphic editors
- Gamining
- Database replica

### Builder

Build complex objecys _step by step_.
Building code is usually contained in Director class.

#### Use cases

- Complex object creation
- Step by step creation
- Combination explosion
- Immutable objects

#### Pros

- Fluent interface
- Separation of logic
- Multiple versions

#### Cons

- Complexity
- Additional code
- Runtime errors

### Factory

Interface for creating objects in a superclass, but allows subclasses to modify created objects.

#### Use cases

- Uncertian types
- Similar types
- Flexibility

#### Pros

- Decoupling
- Flexibility
- Encapsulation

#### Cons

- Complexity
- Refactoring
- Number of classes
- Complex testing

#### Real world scenarios

- Database connections
- UI libraries

### Abstract factory

Interface for creating families or dependant objects without concrete class.

#### Use cases

- Create families of objects
- One only factory for more dependant objects

#### Pros

- Consistency
- No concrete class
- Reusability
- SRP
- OCP

#### Cons

- Complexity
- Maintenance
- Dependency
- Unit testing
- Tight coupling

#### Real world example

- GUI libraries
- Databases
- Cross platform requirements

## Structural design patterns

Objects composition and classes structure, changes isolation and flexible maintenance.

### Facade

Wrapper interface over a complex system. A single class (facade) with simplified methods calling system classes.

#### When

- Rampant dependencies
- Complexity of relashionship between classes
- Overexpose of inner code
- Layered architecture
- Simplified API

#### Pros

- Simple API
- Reduced dependencies
- Decoupling
- Easier to use
- Promote layering

### Adapter

### Bridge

### Composite

### Decorator

## Behavioural design patterns
