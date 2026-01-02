import { describe, it, expect } from "vitest";
import {
  Circle,
  computeArea,
  computePerimeter,
  Rectangle,
} from "./012-abstraction";

describe("Abstraction - Shape Area and Perimeter", () => {
  const circle = new Circle(10);
  const rectangle = new Rectangle(10, 5);

  it("should compute area correctly", () => {
    expect(computeArea(circle)).toBe(100 * Math.PI);
    expect(computeArea(rectangle)).toBe(50);
  });

  it("should compute perimeter correctly", () => {
    expect(computePerimeter(circle)).toBe(10 * 2 * Math.PI);
    expect(computePerimeter(rectangle)).toBe(30);
  });
});
