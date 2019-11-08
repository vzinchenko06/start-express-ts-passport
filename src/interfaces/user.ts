export interface IUser {
  id: number
  name: string,
  email: string
}

export interface IPrivateUser extends IUser {
  password: string
}
