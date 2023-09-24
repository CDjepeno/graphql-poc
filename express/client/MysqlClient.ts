import { DataSource } from "typeorm";

export class ClientMysql {
  private static AppDataSource: DataSource = new DataSource({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Dulonx95*",
    database: "Dbz",
    entities: [],
    synchronize: true,
    logging: true,
    migrations: [],
  });

  constructor(test:string) {}

  static getConnection() {
    return this.AppDataSource.initialize()
      .then(() => {
        console.log("Connection initialized with database...");
      })
      .catch((error: Error) => console.log(error));
  }
}

