import * as express from 'express';
import * as cors from "cors";
import fighterRoute from './routes/fighters.route';
export const expressApp = async(app: any) => {
  app.use(express.json());
  app.use(cors());
  app.use(fighterRoute)

}