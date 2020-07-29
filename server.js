const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, '13.232.169.242',() => {
  console.log('Example app listening on port 8000!')
});
