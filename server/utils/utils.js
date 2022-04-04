const moment = require('moment');
// const asyncHandler = require('express-async-handler');
const Size = require('../model/sizeModel');
const Weekly = require('../model/weeklyModel');
const Todo = require('../model/todoModel');
const MyWeight = require('../model/myWeight');
const User = require('../model/userModel');
const MyEvent = require('../model/eventModel');

const getAllSize = async () => {
  return await Size.find();
};
const getAllWeekly = async () => {
  return await Weekly.find();
};
const getTodoListForUsers = async (body) => {
  return await Todo.find();
};
const getMyWeightForUsers = async (body) => {
  return await MyWeight.find();
};

const getMyEvent = async (queries) => {
  const { start, end } = queries;
  console.log('query:', start, end);
  const myEvent = await MyEvent.find({
    start: { $gte: moment(start).toDate() },
    end: { $lte: moment(end).toDate() },
  });
  console.log(myEvent);
  return myEvent;
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
  console.log(getTodoListForUsers(body));

  return getTodoListForUsers(body);
};

const addNewWeight = async (body) => {
  const newMyWeight = new MyWeight({
    userId: body.userId,
    weight: body.weight,
    date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
  });
  await newMyWeight.save();
  return getMyWeightForUsers(body);
};

const addNewEvent = async (event) => {
  const newMyEvent = new MyEvent(event);
  const newEvent = await newMyEvent.save();
  return newEvent;
};

module.exports = {
  getMyEvent,
  addNewEvent,
  addNewWeight,
  getAllSize,
  getAllWeekly,
  getTodoListForUsers,
  addNewTodo,
  setTodoStatus,
  removeTodoItem,
  getMyWeightForUsers,
};
