const db = require('../config/connection');
const { User, Goal } = require('../models');
const userSeeds = require('./userSeeds.json');
const goalSeeds = require('./goalSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    
    await Goal.deleteMany({});
    await Goal.create(goalSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Users & Goals are successfully created!');
  process.exit(0);
});
