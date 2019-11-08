import express from 'express'
import passport from 'passport'
import cors from 'cors'
import bodyParser from 'body-parser'
import { jwtStrategy, localStrategy } from './passport'
import routes from './routes'

///TODO: DB authenticate

// Passport strategies
passport.use(localStrategy)
passport.use(jwtStrategy)

// Create Express server
const app = express()
app.use(cors())
app.use(passport.initialize())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Express configuration
app.set('port', process.env.PORT || 3000)

// Routes configuration
app.use('/api', routes)

export default app