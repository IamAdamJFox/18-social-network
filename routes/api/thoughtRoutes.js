const express = require('express');
const router = express.Router();

const {
  getThoughts,
  getSingleThought,
  addThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtsController');

// Routes for getting all thoughts and creating a new thought
router.get('/', getThoughts);
router.post('/', addThought);

// Routes for getting, updating, and deleting a single thought
router.get('/:thoughtId', getSingleThought);
router.put('/:thoughtId', updateThought);
router.delete('/:thoughtId', deleteThought);

// Route for adding a reaction to a thought
router.post('/:thoughtId/reactions', addReaction);

// Route for removing a specific reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
