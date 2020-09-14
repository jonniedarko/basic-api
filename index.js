// server.js
const express = require('express');

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
})
// Heroku requires specific port
const port = process.env.PORT || 3000
app.listen(port)
