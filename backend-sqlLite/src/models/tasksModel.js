import { openDb } from "../configDB.js";

export const createTable = async () => {
  openDb().then((db) => {
    db.exec(
      "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, title TEXT NOT NULL, description TEXT, status TEXT NOT NULL, created_at TEXT NOT NULL)"
    );
  });
};

export const getAll = async () => {
  const query = "SELECT * FROM tasks";
  return await openDb().then((db) => {
    return db.all(query).then((res) => res);
  });
};

export const getTask = async (id) => {
  const query = "SELECT * FROM tasks WHERE id=?";
  return await openDb().then((db) => {
    return db.all(query, [id]).then((res) => res);
  });
};

export const insertTask = async (task) => {
  const query = "INSERT INTO tasks (title, description, status, created_at) VALUES (?,?,?,?)";

  const dateUTC = new Date(Date.now()).toUTCString();
  await openDb().then((db) => {
    db.run(query, [task.title, task.description, "pendente", dateUTC]);
  });
};

export const deleteTask = async (id) => {
  const query = "DELETE FROM tasks WHERE id = ?";
  await openDb().then((db) => {
    db.run(query, id);
  });
};

export const updateTask = async (task, id) => {
  const query = "UPDATE tasks SET title = ?, description = ?, status = ? WHERE id=?";
  await openDb().then((db) => {
    db.run(query, [task.title, task.description, task.status, id]);
  });
};
