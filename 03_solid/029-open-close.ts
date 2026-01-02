interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amount: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amount: number): number {
    return amount;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amount: number): number {
    return amount * 2;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amount: number): number {
    return amount * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer) {
    return customer.giveDiscount();
  }
}

let customer = new PremiumCustomer();
let discount = new Discount();
console.log("Premium discount:", discount.giveDiscount(customer));

customer = new RegularCustomer();
console.log("Regular discount:", discount.giveDiscount(customer));
