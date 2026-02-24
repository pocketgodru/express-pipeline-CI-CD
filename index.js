const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Docker! Version 2.0')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})