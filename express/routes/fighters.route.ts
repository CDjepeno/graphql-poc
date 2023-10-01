import { Router } from "express";
import { GetAllFighterController } from "../controller/GetAllFighter.controller";
import { GetFighterByIdController } from '../controller/GetFighterById.controller';
import { UpdateFighterController } from '../controller/UpdateFighter.controller';
import { CreateFighterController } from '../controller/CreateFighter.controller';


const fighterRoute = Router()

fighterRoute.post("/api/fighter", CreateFighterController.createFighter)
fighterRoute.get("/api/fighters", GetAllFighterController.getAllFighters)
fighterRoute.get("/api/fighters/:id", GetFighterByIdController.getFighterById)

export default fighterRoute