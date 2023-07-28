const express = require('express');
const router = express.Router();

// Import user controller functions
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// Routes for getting all users and creating a new user
router.get('/', getUsers);
router.post('/', createUser);

// Routes for getting, updating, and deleting a single user
router.get('/:userId', getSingleUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

// Route for adding and removing friends for a user
router.post('/:userId/friends/:friendId', addFriend);
router.delete('/:userId/friends/:friendId', removeFriend);

module.exports = router;
