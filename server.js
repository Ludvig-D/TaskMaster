import express from 'express';
import mongoose from 'mongoose';

import User from './models/User.js';

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/TaskMaster');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hej');
});

app.get('/login', (req, res) => {
  res.send('login');
});

app.get('/signup', async (req, res) => {
  res.send('signup');
});

app.post('/signup', async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;
    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).send('Account with that email exists');
    }
    res.status(201).send('User registered successfully');
  } catch (err) {
    res.status(500).send('asda', err);
  }
});

app.listen(PORT, () => {
  console.log(PORT);
});
