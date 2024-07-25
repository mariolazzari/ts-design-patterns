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

// example

class Amplifier {
  turnOn(): void {
    console.log("Turn On Amp");
  }

  setVolume(volume: number): void {
    console.log(`Volume setted to ${volume}`);
  }
}

class Dvd {
  turnOn(): void {
    console.log("Turn On Dvd");
  }

  playMovie(movie: string): void {
    console.log(`Palying movie ${movie}`);
  }
}

class Projector {
  turnOn(): void {
    console.log("Turn On Projector");
  }

  setDvd(dvd: Dvd): void {
    // dvd.playMovie();
  }
}

class Light {
  dim(level: number): void {
    console.log(`Light setted to ${level}`);
  }
}

class HomeTheaterFacade {
  constructor(
    public amp: Amplifier,
    public dvd: Dvd,
    public projector: Projector,
    public light: Light
  ) {}

  watchMovie(movie: string, volume: number, light: number) {
    this.light.dim(light);
    this.amp.turnOn();
    this.amp.setVolume(volume);
    this.dvd.turnOn();
    this.projector.turnOn();
    this.projector.setDvd(this.dvd);
    this.dvd.playMovie(movie);
  }
}

const homeTheater = new HomeTheaterFacade(
  new Amplifier(),
  new Dvd(),
  new Projector(),
  new Light()
);
homeTheater.watchMovie("L'esorciccio", 10, 8);
homeTheater.watchMovie("Ku fu: dalla Sicilia con furore", 20, 10);
