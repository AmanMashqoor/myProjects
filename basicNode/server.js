const express = require('express')
// cont nodemon = require('nodemon')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World & Aman Mashqoor Ali!')
})

app.get('/about', (req, res) => {
  res.send('About page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})