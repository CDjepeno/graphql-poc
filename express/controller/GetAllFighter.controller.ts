import { Request, Response } from "express";
import { FighterService } from '../services/Fighter.service';

export class GetAllFighterController {
  static getAllFighters = async(req: Request, res: Response) => {
    try {
      const fighters = await FighterService.getAllFighters()
      res.status(200).json(fighters)
    } catch (err) {
      console.error(err);
      
    }
  }

}