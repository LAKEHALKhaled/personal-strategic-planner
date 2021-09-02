const { AuthenticationError } = require('apollo-server-express');
const { User, Area } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('areas');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('areas');
    },
    areas: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Area.find(params).sort({ createdAt: -1 });
    },
    area: async (parent, { areaId }) => {
      return Area.findOne({ _id: areaId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addArea: async (parent, { areaText, areaAuthor }) => {
      const area = await Area.create({ areaText, areaAuthor });

      await User.findOneAndUpdate(
        { username: areaAuthor },
        { $addToSet: { areas: area._id } }
      );

      return area;
    },
    addGoal: async (parent, { areaId, goalText, goalAuthor }) => {
      return Area.findOneAndUpdate(
        { _id: areaId },
        {
          $addToSet: { goals: { goalText, goalAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeArea: async (parent, { areaId }) => {
      return Area.findOneAndDelete({ _id: areaId });
      
    },
    removeGoal: async (parent, { areaId, goalId }) => {
      return Area.findOneAndUpdate(
        { _id: areaId },
        { $pull: { goals: { _id: goalId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
