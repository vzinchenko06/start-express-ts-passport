import { RequestHandler } from 'express';
import { PrivateUser, User } from '../../interfaces';
import { generateToken } from '../../passport';

function filterUser(user: PrivateUser): Partial<User> {
  const { id, email, name } = user;
  return { id, email, name };
}

const handleSignIn: RequestHandler = (req, res) => {
  const user = filterUser(req.user as PrivateUser);
  const token = generateToken(user);

  return res.json({ user, token });
};

export default handleSignIn;
