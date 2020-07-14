import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Luis Felipe',
    email: 'luisfsdsantiago@gmail.com',
    password_hash: '123455768786',
  });

  res.json(user);
});

export default routes;
