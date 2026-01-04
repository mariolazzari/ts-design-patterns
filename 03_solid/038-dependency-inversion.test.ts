import { describe, it, expect } from "vitest";
import { HighLevelModule, Mongo, MySql } from "./038-dependency-inversion";

describe("Dependency Inversion Principle", () => {
  it("HighLevelModule should work with different database implementations", () => {
    // Importing here to reflect recent changes

    const mySqlDb = new MySql();
    const highLevelMySql = new HighLevelModule(mySqlDb);
    expect(highLevelMySql.execute("Test Data")).toBe(
      "Test Data saved to MySQL"
    );

    const mongoDb = new Mongo();
    const highLevelMongo = new HighLevelModule(mongoDb);
    expect(highLevelMongo.execute("Test Data")).toBe(
      "Test Data saved to Mongo"
    );
  });
});
