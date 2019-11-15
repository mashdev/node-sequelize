const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = require('./models/index');

// API ENDPOINTS
app.get('/', (req, res) => {
    return db.User.findAll()
    .then((users) => res.send(users))
    .catch((err) => {
        console.log('There was an error with query', JSON.stringify(err))
        return res.send(err)
    })
});

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});