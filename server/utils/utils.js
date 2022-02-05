const Size = require('../model/sizeModel');

const getAllSize = async () => {
  return await Size.find();
};
module.exports = {
  getAllSize,
};
