import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { generateToket } from './token.js';
import bcrypt from 'bcryptjs';

import User from './models/user.model.js';
import jwt from 'jsonwebtoken';

const app = express();

app.use(cors());
app.use(express.json()); //says to express that every income have to be parsed into json

mongoose.connect('mongodb://localhost:27017/second-attempt');

app.post('/api/registration', async (req, res) => {
  console.log(req.body);
  try {
    const newPassword = await bcrypt.hashSync(req.body.password, 10);
    await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      password: newPassword,
    }); //all is getting from client side
    res.json({ status: 'ok' });
  } catch (err) {
    console.log(
      res.json({ status: 'error', error: 'Данный email уже зарегистрирован' })
    );
  }
});

app.post('/api/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    res.send({ status: 'error', error: 'Пользователь не найден' });
  }
  const isPasswordValid = await bcrypt.compareSync(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    res.send({ status: 'ok', user: generateToket(user) });
  } else {
    res.send({ status: 'error' });
  }
});

app.get('/api/page', async (req, res) => {
  const token = req.headers['x-access-token'];
  try {
    const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`);
    const email = decoded.email;
    const user = await User.findOne({ email: email });
    res.send({ status: 'ok', user: user.firstName });
  } catch (err) {
    console.log(err);
    res.send({ status: 'error', error: 'Invalid token' });
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is ready at http://localhost:${port}`);
});
