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
      return console.log("Invalid deposit amount");
    }

    this._balance += amount;
  }

  public withdraw(amount: number): void {
    if (amount < 0) {
      return console.log("Invalid withdrawal amount");
    }

    if (this._balance - amount < 0) {
      return console.log("Insufficient funds");
    }

    this._balance -= amount;
  }
}

const myAccount = new BankAccount(1000);
console.log("Opening balance:", myAccount.balance);
myAccount.withdraw(100);
myAccount.deposit(200);
myAccount.deposit(-200);
myAccount.withdraw(-100);
console.log("Final balance:", myAccount.balance);
