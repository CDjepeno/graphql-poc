import { Router } from "express";
import { GetAllFighterController } from "../controller/GetAllFighter.controller";
import { GetFighterByIdController } from '../controller/GetFighterById.controller';
import { UpdateFighterController } from '../controller/UpdateFighter.controller';


const fighterRoute = Router()

fighterRoute.get("/api/fighters", GetAllFighterController.getAllFighters)
fighterRoute.get("/api/fighters/:id", GetFighterByIdController.getFighterById)
fighterRoute.put("/api/fighters/:id", UpdateFighterController.updateFighter)

export default fighterRoute