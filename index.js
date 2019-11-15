const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = require('./models/index');

// API ENDPOINTS
app.get('/', (req, res) => {
    
    return db.User.findAll()
    .then((contacts) => res.send(contacts))
    .catch((err) => {
        console.log('There was an error with query', JSON.stringify(err))
        return res.send(err)
    })
    // res.json("This is the home page")
});

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});