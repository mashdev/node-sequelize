const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

// API ENDPOINTS
app.get('/', (req, res) => {
	res.json("This is the home page")
})

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})