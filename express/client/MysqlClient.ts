import { DataSource } from "typeorm";
import { Fighter } from "../models/Fighter.model";

export class ClientMysql {
  static AppDataSource: DataSource = new DataSource({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Dulonx95*",
    database: "Dbz",
    entities: [Fighter],
    synchronize: true,
    logging: true,
    migrations: [],
  });

  static async getConnection() {
    try {
      await this.AppDataSource.initialize();
      console.log("Connection initialized with database...");
    } catch (error) {
      return console.log(error);
    }
  }
}

