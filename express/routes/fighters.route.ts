import { Router } from "express";
import { GetAllFighterController } from "../controller/GetAllFighter.controller";


const fighterRoute = Router()

fighterRoute.get("/api/fighters", GetAllFighterController.getAllFighters)

export default fighterRoute