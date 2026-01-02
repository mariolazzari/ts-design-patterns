export class BankAccount {
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
