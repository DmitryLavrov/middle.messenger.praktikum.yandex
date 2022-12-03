const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.port || 3000
const STATIC_PATH = '/dist'

app.use(express.static(path.join(__dirname, STATIC_PATH)))

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, STATIC_PATH)})
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
