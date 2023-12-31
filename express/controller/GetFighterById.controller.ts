import { Request, Response } from "express";
import { FighterService } from '../services/Fighter.service';

export class GetFighterByIdController {
  static getFighterById = async(req: Request, res: Response) => {
    try {
      const fighters = await FighterService.getFighterById(+req.params.id)
      return res.status(200).json(fighters)
    } catch (err) {
      res.status(err.status).json(err.message)
    }
  }

}