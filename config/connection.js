//Import mongoose for DB connection
const mongoose = require('mongoose');

//Uses dotenv to connect to DB or statement for default route if variables are unavailable
const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mySocial';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = mongoose.connection;