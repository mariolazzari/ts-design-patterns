interface IDatabase {
  save(data: string): string;
}

export class MySql implements IDatabase {
  save(data: string): string {
    return `${data} saved to MySQL`;
  }
}

export class Mongo implements IDatabase {
  save(data: string): string {
    return `${data} saved to Mongo`;
  }
}

export class HighLevelModule {
  constructor(private db: IDatabase) {}

  execute(data: string): string {
    return this.db.save(data);
  }
}
