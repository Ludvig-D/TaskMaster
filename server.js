import express from 'express';
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  res.send('hej');
});

app.listen(PORT, () => {
  console.log(PORT);
});
