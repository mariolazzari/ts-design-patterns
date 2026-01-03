import { describe, it, expect } from "vitest";
import {
  Bird,
  CreditCardProcessor,
  DebitCardProcessor,
  executePayment,
  PayPallProcessor,
  Penguin,
} from "./032-liskov";

describe("Liskov Substitution Principle", () => {
  it("Bird and Penguin classes should adhere to LSP", () => {
    const bird = new Bird();
    expect(bird.fly()).toBe("Bird is flying");

    const penguin = new Penguin();
    expect(penguin.fly()).toBe("Flightless birds cannot fly");
  });

  it("Payment processors should adhere to LSP", () => {
    const credit = new CreditCardProcessor();
    expect(executePayment(credit, 100)).toBe(
      "Processing credit card payment 100"
    );

    const debit = new DebitCardProcessor();
    expect(executePayment(debit, 200)).toBe(
      "Processing debit card payment 200"
    );

    const paypall = new PayPallProcessor();
    expect(executePayment(paypall, 300)).toBe(
      "Processing paypall card payment 300"
    );
  });
});
