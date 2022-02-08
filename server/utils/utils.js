const Size = require('../model/sizeModel');
const Weekly = require('../model/weeklyModel');
const Todo = require('../model/todoModel');

const getAllSize = async () => {
  return await Size.find();
};
const getAllWeekly = async () => {
  return await Weekly.find();
};
const getTodoListForUsers = async (body = '') => {
  return await Todo.find({ userId: body.userId });
};
const addNewTodo = async (body) => {
  const newTodo = new Todo({
    userId: body.userId,
    task: body.task,
    isCompleted: false,
  });
  await newTodo.save();
  return getTodoListForUsers(body);
};

const setTodoStatus = async (body) => {
  const newTodo = new Todo({
    userId: body.userId,
    task: body.task,
    isCompleted: body.isCompleted,
  });
  await Todo.findOneAndUpdate(
    { userId: body.userId, task: body.task },
    { isCompleted: body.isCompleted }
  );
  return getTodoListForUsers(body);
};

const removeTodoItem = async (body) => {
  await Todo.deleteOne({ task: body.task });
  return getTodoListForUsers();
};

module.exports = {
  getAllSize,
  getAllWeekly,
  getTodoListForUsers,
  addNewTodo,
  setTodoStatus,
  removeTodoItem,
};
