const express = require('express');

const app = express();

const PORT = 3000;
const STATIC_PATH = '/dist'

app.use(express.static(`${__dirname}${STATIC_PATH}`))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
