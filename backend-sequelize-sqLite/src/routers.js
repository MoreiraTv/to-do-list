import { Router } from "express";
import { index, delTask, getAllTasks, detailTask, newTask, updateTask } from "./controllers/tasksControllers.js";
import { validateId, validateStatus, validateTask } from "./middlewares/tasksMiddleware.js";

export const router = Router();

router.get("/", index);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", validateId, detailTask);
router.post("/tasks", validateTask, newTask);
router.put("/tasks/:id", validateStatus,validateId, updateTask);
router.delete("/tasks/:id", validateId, delTask);
