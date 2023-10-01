import { Request, Response } from "express";
import { FighterService } from '../services/Fighter.service';

export class CreateFighterController {
  static createFighter = async(req: Request, res: Response) => {
    try {
      const fighter = await FighterService.createFighter(req.body)

      console.log("Controller-express********************************");
      console.log(fighter);
      
      return res.status(200).json(fighter)
    } catch (err) {
      console.log(err);
      
      res.status(500).json(err.message)
    }
  }

}