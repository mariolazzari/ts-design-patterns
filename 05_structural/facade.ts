class Grinder {
  girndBeads(): void {
    console.log("Grinding beads...");
  }
}

class Boiler {
  boilWater(): void {
    console.log("Boiling water...");
  }
}

class Brewer {
  brewCoffee(): void {
    console.log("Brewing coffee...");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  makeCoffee(): void {
    this.grinder.girndBeads();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("Coffee is ready");
  }
}

const coffee = new CoffeeMakerFacade(new Grinder(), new Boiler(), new Brewer());
coffee.makeCoffee();
