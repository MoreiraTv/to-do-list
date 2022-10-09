import {
  deleteTask,
  getAll,
  getTask,
  insertTask,
  updateTask,
} from "../models/tasksModel.js";

export const index = async (_req, res) => {
  res.status(200).json({message: "running server"});
}

export const getAllTasks = async (_req, res) => {
  res.status(200).json(await getAll());
};

export const getTaskId = async (req, res) => {
  const { id } = req.params;
  res.status(200).json(await getTask(id));
};

export const newTasks = async (req, res) => {
  let { title, description } = req.body;
  if (!description || description === "") {
    description = ""
    await insertTask({title, description});
    res.status(200).json({
      StatusCode: 200,
    });
  }else{
    await insertTask({title, description});
    res.status(200).json({
      StatusCode: 200,
    });
  }
};

export const updTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, status} = req.body;
  await updateTask({title, description, status}, id);
  res.status(200).json({
    StatusCode: 200,
  });
};

export const delTask = async (req, res) => {
  const { id } = req.params;
  await deleteTask(id);
  res.status(200).json({
    StatusCode: 200,
  });
};
