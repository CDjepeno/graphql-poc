import { ClientMysql } from "./client/MysqlClient";
import { expressApp } from "./express-app";
import * as express from "express";

const app = express();
const PORT = 3000;

expressApp(app);
ClientMysql.getConnection();

app.listen(PORT);

console.log(`Express server has started on port ${PORT}`);
