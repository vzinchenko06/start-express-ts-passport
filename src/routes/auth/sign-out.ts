import { RequestHandler } from 'express'
import httpStatus from 'http-status'

const handleSignOut: RequestHandler = (req, res) => res.sendStatus(httpStatus.OK)

export default handleSignOut