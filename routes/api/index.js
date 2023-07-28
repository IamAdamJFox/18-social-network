const express = require('express');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

const mainRouter = express.Router();

mainRouter.use('/users', userRoutes);

mainRouter.use('/thoughts', thoughtRoutes);

module.exports = mainRouter;
