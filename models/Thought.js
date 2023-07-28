// Import required modules
const { Schema, model } = require('mongoose');
const reactionModel = require('./Reaction');

// Define the Thought Schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => new Date(timestamp).toLocaleString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionModel],
}, {
  toJSON: {
    getters: true,
    virtuals: true,
  },
  id: false,
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
