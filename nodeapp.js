const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"><br><br>
      <input type="submit" value="Welcome">
    </form>
  `);
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Perform any necessary validation or authentication here

  res.send(`Username: ${username}, Password: ${password}`);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
