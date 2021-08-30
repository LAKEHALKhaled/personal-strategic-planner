const db = require('../config/connection');
const { User, Area } = require('../models');
const userSeeds = require('./userSeeds.json');
const goalSeeds = require('./areaSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Area.deleteMany({});

    await User.create(userSeeds);


    for (let i = 0; i < areaSeeds.length; i++) {
      const { _id, areaAuthor } = await Area.create(areaSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: areaAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Users & Areas are successfully created!');
  process.exit(0);
});
