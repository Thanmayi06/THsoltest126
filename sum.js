const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const a = 1;
  const b = 2;
  const c = a + b;
  
  res.send(`Sum of two numbers: ${c}`);
});

app.listen(9090, 'localhost', () => {
  console.log('Server is running on http://localhost:9090');
});
