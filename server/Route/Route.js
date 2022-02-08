const express = require('express');
const router = express.Router();
const size = require('../model/sizeModel');
const weekly = require('../model/weeklyModel');
const todo = require('../model/todoModel');

const {
  getAllSize,
  getAllWeekly,
  setTodoStatus,
  addNewTodo,
  getTodoListForUsers,
  removeTodoItem,
} = require('../utils/utils');

router.get('/size', async (req, res) => {
  try {
    res.status(200).send(await getAllSize());
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.get('/weekly', async (req, res) => {
  try {
    res.status(200).send(await getAllWeekly());
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.post('/todo/', async (req, res) => {
  try {
    res.status(200).send(await getTodoListForUsers(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.post('/todo/add', async (req, res) => {
  try {
    res.status(200).send(await addNewTodo(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.post('/todo/set', async (req, res) => {
  try {
    res.status(200).send(await setTodoStatus(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.post('/todo/delete', async (req, res) => {
  try {
    res.status(200).send(await removeTodoItem(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

module.exports = router;
