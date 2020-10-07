const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const formRouter = require('./routes/form-router.js');
const app = express();
const apiPort = 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Check MongoDB connection
db.once('open', function() {
    console.log('Connected to MongoDB');
})
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.get('/', (req, res) => {
    res.send('Hello world!');
})

app.use('/api', formRouter);

app.listen(apiPort, () => console.log(`server running on port ${apiPort}`));

