const DB = require('./config/connection');
const express = require('express');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Once the MongoDB connection is open, start the server and listen on the specified port
DB.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running and listening at http://localhost:${PORT}`);
    });
});
