import { describe, it, expect } from "vitest";
import { Book, Dog, Electronic } from "./022-inheritance";

describe("Inheritance", () => {
  const myDog = new Dog();

  it("should move dog", () => {
    myDog.move(5);
    expect(myDog).toBeInstanceOf(Dog);
    expect(myDog.move(5)).toBe("dog moved 5 meters");
  });

  it("should display book info", () => {
    const myBook = new Book(
      "id1",
      10,
      "My book description",
      "Book title",
      "Book Author"
    );

    expect(myBook.display()).toBe("Title: Book title, Author: Book Author");
  });

  it("should display pc info", () => {
    const myPc = new Electronic(
      "id2",
      1000,
      "My PC description",
      "PC Brand",
      "PC Model"
    );
    expect(myPc.display()).toBe(
      "Brand: PC Brand, Model: PC Model (ID: id2, Price: 1000, Description: My PC description)"
    );
  });
});
