import { describe, it, expect } from "vitest";
import { BankAccount } from "./017-encapsulation";

describe("Encapsulation", () => {
  const initialBalance = 1000;
  const myAccount = new BankAccount(initialBalance);

  it("should have correct opening balance", () => {
    expect(myAccount.balance).toBe(initialBalance);
  });

  it("should deposit correctly", () => {
    const depositAmount = 200;
    myAccount.deposit(depositAmount);
    expect(myAccount.balance).toBe(initialBalance + depositAmount);
  });

  it("should throw an error when withdrawing a negative amount", () => {
    expect(() => myAccount.withdraw(-100)).toThrow("Invalid withdrawal amount");
  });

  it("should throw an error when withdrawing more than the balance", () => {
    expect(() => myAccount.withdraw(2000)).toThrow("Insufficient funds");
  });

  it("should throw an error when depositing a negative amount", () => {
    expect(() => myAccount.deposit(-50)).toThrow("Invalid deposit amount");
  });

  it("should withdraw correctly", () => {
    const withdrawAmount = 100;
    myAccount.withdraw(withdrawAmount);
    expect(myAccount.balance).toBe(initialBalance + 200 - withdrawAmount);
  });

  it("should have correct final balance", () => {
    expect(myAccount.balance).toBe(1100);
  });
});
