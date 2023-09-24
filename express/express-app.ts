import * as express from 'express';
import * as cors from "cors";
export const expressApp = async(app: any) => {
  app.use(express.json());
  app.use(cors());

}