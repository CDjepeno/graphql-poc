import { Request, Response } from "express";
import { FighterService } from '../services/Fighter.service';

export class UpdateFighterController {
  static updateFighter = async(req: Request, res: Response) => {
    try {
      const fighters = await FighterService.updateFighter(req.body , +req.params.id)
      return res.status(200).json(fighters)
    } catch (err) {
      res.status(500).json(err.message)
    }
  }

}