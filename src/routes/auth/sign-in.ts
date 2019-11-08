import { RequestHandler } from 'express'
import { IPrivateUser, IUser } from '../../interfaces'
import { generateToken } from '../../passport'

function filterUser(user: IPrivateUser): Partial<IUser> {
  const { id, email, name } = user
  return { id, email, name }
}

const handleSignIn: RequestHandler = (req, res) => {
  const user = filterUser(req.user as IPrivateUser)
  const token = generateToken(user)

  return res.json({ user, token })
}

export default handleSignIn