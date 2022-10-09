import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  // log: ['query']
});

export const index = async (_req, res) => {
  return res.status(200).json({message: "api running!"});
};

export const getAllTasks = async (_req, res) => {
  const tasks = await prisma.task.findMany();
  const countTasks = await prisma.task.count();

  return res.status(200).json({ tasks, countTasks });
};

export const detailTask = async (req, res) => {
  const { id } = req.params;

  const task = await prisma.task.findMany({
    where: {
      id,
    },
  });

  return res.status(200).json(task);
};

export const newTask = async (req, res) => {
  const { title, description, status } = req.body;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      status,
    },
  });

  return res.status(200).json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  const { title, description, status } = req.body;

  const task = await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      status,
    },
  });

  return res.status(200).json(task);
};

export const delTask = async (req, res) => {
  const { id } = req.params;

  const task = await prisma.task.delete({
    where: {
      id,
    },
  });

  return res.status(200).json(task);
};
