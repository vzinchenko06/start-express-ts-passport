import { Router } from 'express'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import handleSignIn from './sign-in'
import handleSignOut from './sign-out'

const router = Router()

router.post('/sign-in', passport.authenticate('local', { session: false }), handleSignIn)

router.post('/sign-out', passport.authenticate('jwt', { session: false }), handleSignOut)

export default router