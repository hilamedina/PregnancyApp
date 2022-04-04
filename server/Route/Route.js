const express = require('express');
const router = express.Router();
const size = require('../model/sizeModel');
const weekly = require('../model/weeklyModel');
const todo = require('../model/todoModel');
const MyEvent = require('../model/eventModel');
const User = require('../model/userModel');
const auth = require('../middleware/auth');

const {
  getMyEvent,
  getMyWeightForUsers,
  getAllSize,
  getAllWeekly,
  setTodoStatus,
  addNewTodo,
  getTodoListForUsers,
  removeTodoItem,
  addNewWeight,
  addNewEvent,
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
router.get('/myWeight', async (req, res) => {
  try {
    res.status(200).send(await getMyWeightForUsers(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.post('/addWeight', async (req, res) => {
  try {
    res.status(200).send(await addNewWeight(req.body));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.post('/api/calandar/create-event', async (req, res) => {
  try {
    const event = req.body;
    const newEvent = await addNewEvent(event);
    res.status(200).send(newEvent);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
router.get('/api/calandar/get-event', async (req, res) => {
  try {
    const event = await getMyEvent(req.query);
    res.status(200).send(event);
  } catch (e) {
    console.log('Error:', e);
    res.status(400).send({ error: e.message });
  }
});
router.get('/api/calandar/events', async (req, res) => {
  try {
    const events = await MyEvent.find();
    res.status(200).send(events);
  } catch (e) {
    console.log('Error:', e);
    res.status(400).send({ error: e.message });
  }
});

router.post('/api/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});
router.patch('/api/week', auth, async (req, res) => {
  try {
    const user = req.user;
    const { week } = req.body;
    user.week = week;
    user.save();
    res.status(201).send('week update');
  } catch (e) {
    res.status(400).send(e.message);
  }
});
router.get('/api/users/me', auth, (req, res) => {
  res.send(req.user);
});

router.post('/api/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

router.post('/api/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.body.token;
    });
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
