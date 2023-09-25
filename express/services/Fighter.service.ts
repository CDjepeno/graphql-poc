import { ClientMysql } from '../client/MysqlClient';
import { Fighter } from '../models/Fighter.model';
export class FighterService {
  static async getAllFighters() {
    try {
      const users = ClientMysql.AppDataSource.manager.find(Fighter)
      return users
    } catch (err) {
      console.log(err);
      
    }
  }

}