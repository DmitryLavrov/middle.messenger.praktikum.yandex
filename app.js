const express = require('express')

const app = express()

const PORT = 3000
const STATIC_PATH = '/dist'

app.use(express.static(`${__dirname}${STATIC_PATH}`))

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}${STATIC_PATH}` })
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
