interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  operationA(): string {
    return "Operation A";
  }
}

class ProductB implements IProductB {
  operationB(): string {
    return "Operation B";
  }

  combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();

    return `Operation B collaborating with ${result}`;
  }
}

class Factory implements IFactory {
  createProductA(): IProductA {
    return new ProductA();
  }

  createProductB(): IProductB {
    return new ProductB();
  }
}

const factory = new Factory();
const pA = factory.createProductA();
const pB = factory.createProductB();

console.log(pA.operationA());
console.log(pB.combinedOperation(pA));
console.log(pB.operationB());

// Example

interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

interface GuiFactory {
  createButton(): Button;
  createCheckbox(button: Button): Checkbox;
}

class WindowsButton implements Button {
  render(): void {
    console.log("Windows Button");
  }

  onClick(f: Function): void {
    console.log("Windows button clicked");
    f();
  }
}

class WindowsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  render(): void {
    console.log("Render Windows checkbox");
  }

  toggle(): void {
    this.button.onClick(() => console.log("Windows checkbox toggled"));
  }
}

class MacOsButton implements Button {
  render(): void {
    console.log("Windows Button");
  }

  onClick(f: Function): void {
    console.log("MacOs button clicked");
    f();
  }
}

class MacOsCheckbox implements Checkbox {
  constructor(private button: Button) {}

  render(): void {
    console.log("Render MacOs checkbox");
  }

  toggle(): void {
    this.button.onClick(() => console.log("MacOs checkbox toggled"));
  }
}

class WindowsFactory implements GuiFactory {
  createButton(): Button {
    return new WindowsButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new WindowsCheckbox(button);
  }
}

class MacOsFactory implements GuiFactory {
  createButton(): Button {
    return new MacOsButton();
  }

  createCheckbox(button: Button): Checkbox {
    return new MacOsCheckbox(button);
  }
}

function renderUI(factory: GuiFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => console.log("Button click"));
  checkbox.toggle();
}

renderUI(new WindowsFactory());
renderUI(new MacOsFactory());
