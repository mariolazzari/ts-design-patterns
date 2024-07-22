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
