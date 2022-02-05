const sizeModel = require('../server/model/sizeModel');
const Size = require('../server/model/sizeModel');

async function seedInitialData() {
  const data = await Size.find();
  if (data.length !== 0) {
    // Data exists, no need to seed.
    return;
  }

  const sizes = [
    new Size({
      weekNumber: 1,
      label: 'Baby at 1 Week',
      photo:
        'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-1.png?width=236',
      description: '1 week',
      cm: 'No baby yet',
    }),
    new Size({
      weekNumber: 2,
      label: 'Baby at 2 Week',
      photo:
        'https://images.agoramedia.com/wte3.0/gcms/pregnancy-fruit-2021-week-1.png?width=236',
      description: '2 week',
      cm: 'No baby yet',
    }),
  ];

  await Size.create(sizes);
}

module.exports = {
  seedInitialData,
};
