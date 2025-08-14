import express from 'express';
import mongoose from 'mongoose';

import User from './models/User.js';

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/TaskMaster');

const user = await User.create({
  username: 'testuser',
  email: 'email@gmail.com',
  password: 'test',
});
console.log(user);

app.get('/', (req, res) => {
  res.send('hej');
});

app.listen(PORT, () => {
  console.log(PORT);
});
