export interface User {
  id: number;
  name: string;
  email: string;
}

export interface PrivateUser extends User {
  password: string;
}
