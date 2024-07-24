abstract class Car {
  constructor(public model: string, public year: number) {}

  abstract displayInfo(): void;
}

class Sedan extends Car {
  displayInfo(): void {
    console.log(`Sedan ${this.model} ${this.year}`);
  }
}

class Suv extends Car {
  displayInfo(): void {
    console.log(`Suv ${this.model} ${this.year}`);
  }
}

class Hatchback extends Car {
  displayInfo(): void {
    console.log(`Hatchback ${this.model} ${this.year}`);
  }
}

type CarType = "sedan" | "suv" | "hatchback";

class CarFactory {
  public createCar(type: CarType, model: string, year: number): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, year);

      case "suv":
        return new Suv(model, year);

      case "hatchback":
        return new Hatchback(model, year);

      default:
        throw new Error("Car type not supported");
    }
  }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Camry", 2023);
sedan.displayInfo();

const suv = carFactory.createCar("suv", "Rav4", 2022);
suv.displayInfo();

// Example

abstract class PaymentProcessor {
  constructor(public amount: number) {}

  abstract processPayment(): void;
}

class PayPall extends PaymentProcessor {
  processPayment(): void {
    console.log(`PayPall amount: ${this.amount}`);
  }
}

class Stripe extends PaymentProcessor {
  processPayment(): void {
    console.log(`Stripe amount: ${this.amount}`);
  }
}

class Bank extends PaymentProcessor {
  processPayment(): void {
    console.log(`Bank amount: ${this.amount}`);
  }
}

type PaymentType = "paypall" | "stripe" | "bank";

class PaymentFactory {
  createPayment(type: PaymentType, amount: number): PaymentProcessor {
    switch (type) {
      case "paypall":
        return new PayPall(amount);

      case "stripe":
        return new Stripe(amount);

      case "bank":
        return new Bank(amount);

      default:
        throw new Error("Invalid payment processor");
    }
  }
}

const payment = new PaymentFactory();
const paypall = payment.createPayment("paypall", 100);
paypall.processPayment();
