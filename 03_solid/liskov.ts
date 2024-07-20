class Bird {
  fly(): void {
    console.log("Bird is flying ");
  }
}

class FlightLessBird extends Bird {
  fly(): void {
    console.log("Flightless birds cannot fly");
  }
}

class Penguin extends FlightLessBird {
  // override
  //   fly(): void {
  //     throw new Error("Penguins cannot fly");
  //   }
}

const penguin = new Penguin();
penguin.fly();

abstract class PaymentProcess {
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcess {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment ${amount}`);
  }
}

class DebitCardProcessor extends PaymentProcess {
  processPayment(amount: number): void {
    console.log(`Processing debit card payment ${amount}`);
  }
}

class PayPallProcessor extends PaymentProcess {
  processPayment(amount: number): void {
    console.log(`Processing paypall card payment ${amount}`);
  }
}

function executePayment(process: PaymentProcess, amount: number): void {
  process.processPayment(amount);
}

const credit = new CreditCardProcessor();
executePayment(credit, 100);
const debit = new DebitCardProcessor();
executePayment(debit, 200);
