# TypeScript Design Patterns

## Intro

Design patterns are reusable solutions to common problems.

- Tested soltutions
- Better comunication
- Best practices

## OOP

### Objects

OOP uses objects in order to structure and organize code.

### Abstraction

Process of simplifyng complex systems by breaking them into smaller components, by exposing only essential features to user (implementation hidding).

- class: blueprint for object creation
- interface: enforce class structure

ex: [TypeORM](https://typeorm.io/) 

### Encapsulation

Promotes separation of concerns and data hiding.

### Polymorphism 

It enables a single interface or method to work with different types.

- Parameters
- Generics
- Ad hoc

ex: [ExpressJS](https://expressjs.com/)

### Inheritance

Allows to inherit attributes and methods from another class, promoting reusability and modularity.

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
A class must bing one only responsability.

### Open close

Classes, functions and interfaces must be open for extension, but closed for modification.

- increase reusability
- decrease bugs
- simpler update process
- simpler patching

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

Build complex objecys *step by step*. 
Building code is usually contained in Director class.

#### Use cases

- Complex object creation
- Step by step creation
- Combination explosion
- Immutable objects

### Factory

### Abstract factory





## Structural design patterns

## Behavioural design patterns