const express = require('express');
const router = express.Router();
const size = require('../model/sizeModel');

const { getAllSize } = require('../utils/utils');

router.get('/size', async (req, res) => {
  try {
    res.status(200).send(await getAllSize());
  } catch (e) {
    res.status(400).send({ error: e.message });
    // res.status(400).send('Hi');
  }
});

module.exports = router;
