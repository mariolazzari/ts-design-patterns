export class Bird {
  fly(): string {
    return "Bird is flying";
  }
}

class FlightLessBird extends Bird {
  fly(): string {
    return "Flightless birds cannot fly";
  }
}

export class Penguin extends FlightLessBird {
  // override
  //   fly(): never {
  //     throw new Error("Penguins cannot fly");
  //   }
}

abstract class PaymentProcess {
  abstract processPayment(amount: number): string;
}

export class CreditCardProcessor extends PaymentProcess {
  processPayment(amount: number): string {
    return `Processing credit card payment ${amount}`;
  }
}

export class DebitCardProcessor extends PaymentProcess {
  processPayment(amount: number): string {
    return `Processing debit card payment ${amount}`;
  }
}

export class PayPallProcessor extends PaymentProcess {
  processPayment(amount: number): string {
    return `Processing paypall card payment ${amount}`;
  }
}

export function executePayment(
  process: PaymentProcess,
  amount: number
): string {
  return process.processPayment(amount);
}
