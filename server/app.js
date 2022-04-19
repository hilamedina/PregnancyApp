require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const userRoute = require('../server/Route/Route');
const cors = require('cors');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, '../client/build');
const { seedInitialData } = require('../server/seedDB');

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));
app.use('/', userRoute);

const PASSWORD = process.env.PASSWORD;

mongoose.connect(
  `mongodb+srv://HilaDb:${PASSWORD}@databaseproject.nwjez.mongodb.net/pregnancyDB?retryWrites=true&w=majority`
);

const PORT = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${PORT}`);
});

seedInitialData();
