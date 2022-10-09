import { Router } from "express";
import { index, delTask, getAllTasks, getTaskId, newTasks, updTask } from "./controllers/tasksControllers.js";
import { validateId, validateStatus, validateTask } from "./middlewares/tasksMiddleware.js";

export const router = Router();

router.get("/", index);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", validateId, getTaskId);
router.post("/tasks", validateTask, newTasks);
router.put("/tasks/:id", validateStatus,validateId, updTask);
router.delete("/tasks/:id", validateId, delTask);
