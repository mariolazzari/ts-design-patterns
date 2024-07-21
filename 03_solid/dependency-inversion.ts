interface IDatabase {
  save(data: string): void;
}

class MySql implements IDatabase {
  save(data: string): void {
    console.log(`${data} saved to MySQL`);
  }
}

class Mongo implements IDatabase {
  save(data: string): void {
    console.log(`${data} saved to Mongo `);
  }
}

class HighLevelModule {
  constructor(private db: IDatabase) {}

  execute(data: string) {
    this.db.save(data);
  }
}

const mysql = new MySql();
const mongo = new Mongo();

let hlm = new HighLevelModule(mysql);
hlm.execute("My data");
hlm = new HighLevelModule(mongo);
hlm.execute("My data");
