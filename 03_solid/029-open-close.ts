export interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amount: number): number;
}

export class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amount: number): number {
    return amount;
  }
}

export class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amount: number): number {
    return amount * 2;
  }
}

export class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amount: number): number {
    return amount * 3;
  }
}

export class Discount {
  giveDiscount(customer: Customer) {
    return customer.giveDiscount();
  }
}
