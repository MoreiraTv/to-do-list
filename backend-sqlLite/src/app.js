import { createTable } from "./models/tasksModel.js";
import { router } from "./routers.js";
import cors from "cors";

import express from "express";
export const app = express();
createTable();

app.use(express.json());
app.use(cors());
app.use(router);
