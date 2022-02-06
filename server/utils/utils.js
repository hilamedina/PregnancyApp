const Size = require('../model/sizeModel');
const Weekly = require('../model/weeklyModel');

const getAllSize = async () => {
  return await Size.find();
};
const getAllWeekly = async () => {
  return await Weekly.find();
};
module.exports = {
  getAllSize,
  getAllWeekly,
};
