import { ClientMysql } from "../client/MysqlClient";
import { Fighter } from "../models/Fighter.model";
import { createFighterDTO, updateFighterDTO } from "../dto/fighters.dto.";
import { Repository } from "typeorm";
export class FighterService {
  static async getAllFighters() {
    try {
      const fighters = await ClientMysql.AppDataSource.manager.find(Fighter);
      return fighters;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  }
  static async getFighterById(id: number) {
    try {
      const fighter = await ClientMysql.AppDataSource.manager.findOne(Fighter, {
        where: {
          id,
        },
      });
      if (!fighter) {
        throw new Error("Le combattant n'existe pas");
      }
      return fighter;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  static async updateFighter(payload: updateFighterDTO, id: number) {
    try {
      await ClientMysql.AppDataSource.createQueryBuilder()
        .update(Fighter)
        .set({
          hp: payload.hp,
          cp: payload.cp,
          name: payload.name,
          picture: payload.picture,
          type: payload.type,
        })
        .where("id =  :id", { id })
        .execute();

      return `Le combatant ${payload.name} a bien été modifier`;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  static async createFighter(payload: createFighterDTO) {
    try {
      const repository = ClientMysql.AppDataSource.getRepository(Fighter)
      const fighter = new Fighter()
      fighter.cp = payload.cp
      fighter.hp = payload.hp
      fighter.name = payload.name
      fighter.picture = payload.picture
      fighter.type = payload.type

      return repository.save(fighter)
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
