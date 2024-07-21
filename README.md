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



## Structural design patterns

## Behavioural design patterns