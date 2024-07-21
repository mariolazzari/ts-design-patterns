class Singleton {
  private static instance: Singleton;
  private static _value: number;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

const inst1 = Singleton.getInstance();
const inst2 = Singleton.getInstance();
inst1.value = 10;
console.log("Inst1 value:", inst1.value);
console.log("Inst2 value:", inst2.value);
console.log("inst1 eq inst2:", inst1 === inst2);

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(msg: string) {
    const time = new Date().toLocaleTimeString();
    console.log(`${time} - ${msg}`);
  }
}

const log1 = Logger.getInstance();
log1.log("Test Mario");

const log2 = Logger.getInstance();
log2.log("Test Mario");

class Application {
  // tight coupling: you need a logger class!
  constructor(private logger: Logger) {}

  run(): void {
    this.logger.log("Applicarion is running");
    this.logger.log("Applicarion is stopping");
  }
}

const appLogger = Logger.getInstance();
const app = new Application(appLogger);
app.run();
