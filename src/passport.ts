import { IStrategyOptions, Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JWTStrategy, StrategyOptions } from 'passport-jwt';
import { User } from './interfaces';
import { users } from './data';
import jwt from 'jsonwebtoken';

/**
 * JWT Secret key
 */
const jwtSecret: string = String(process.env.JWT_KEY) || 'unsecured';

/**
 * Local passport strategy (authenticate by email/password)
 */
const localStrategyOptions: IStrategyOptions = {
  session: false,
  usernameField: 'email',
};

export const localStrategy = new LocalStrategy(localStrategyOptions, (email, password, done) => {
  const user = users.find((u) => u.email === email && u.password === password);

  return user ? done(null, user) : done('User not found');
});

/**
 * JWT passport strategy (authenticate by Authorization header)
 */
const jwtStrategyOptions: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: jwtSecret,
};

export const jwtStrategy = new JWTStrategy(jwtStrategyOptions, (payload: Partial<User>, done) => {
  const user = users.find((u) => u.id === payload.id);

  return user ? done(null, user) : done('User not found');
});

export const generateToken = (user: Partial<User>): string => jwt.sign(user, jwtSecret);
