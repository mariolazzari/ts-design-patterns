import { describe, it, expect } from "vitest";
import {
  Customer,
  Discount,
  GoldCustomer,
  PremiumCustomer,
  RegularCustomer,
} from "./029-open-close";

describe("Open/Closed Principle", () => {
  let customer: Customer;
  const discount = new Discount();

  it("should give regular discount", () => {
    customer = new RegularCustomer();
    expect(discount.giveDiscount(customer)).toBe(10);
  });

  it("should give premium discount", () => {
    customer = new PremiumCustomer();
    expect(discount.giveDiscount(customer)).toBe(20);
  });

  it("should give gold discount", () => {
    customer = new GoldCustomer();
    expect(discount.giveDiscount(customer)).toBe(30);
  });
});
