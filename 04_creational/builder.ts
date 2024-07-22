interface IBuilder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

class Builder implements IBuilder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  setPartA(): void {
    this.product.add("PartA");
  }

  setPartB(): void {
    this.product.add("PartB");
  }

  setPartC(): void {
    this.product.add("PartC");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();

    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinProd(): void {
    this.builder.setPartA();
  }

  public buildFullProd(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new Builder();
const dir = new Director();
dir.setBuilder(builder);

// build min prod
dir.buildMinProd();
const minProd = builder.getProduct();
console.log("Min", minProd);

// Full prod
dir.buildFullProd();
const fullProd = builder.getProduct();
console.log("Full", fullProd);

// Real example
interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhone(phone: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public phone: string
  ) {}
}

class CustomerBuilder implements ICustomerBuilder {
  private firstName = "";
  private lastName = "";
  private email = "";
  private phone = "";

  setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }

  setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }

  setPhone(phone: string): ICustomerBuilder {
    this.phone = phone;
    return this;
  }

  build(): ICustomer {
    return new Customer(this.firstName, this.lastName, this.email, this.phone);
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}

  buildMinCustomer(firstName: string, lastName: string, email: string) {
    return this.builder
      .setFirstName(firstName)
      .setLastName(lastName)
      .setEmail(email)
      .build();
  }
}

const custBuilder: ICustomerBuilder = new CustomerBuilder();
const custDir: CustomerDirector = new CustomerDirector(custBuilder);
const minCust: ICustomer = custDir.buildMinCustomer(
  "Mario",
  "Lazzari",
  "mario.lazzari@gmail.com"
);
console.log(minCust);
