export interface UserSignup {
  fullName: string;
  email: string;
  password: string;
}

export interface UserSignin {
  email: string;
  password: string;
}

export interface UserReturnType {
  token: string;
  user: User;
}

export interface User extends UserSignup {
  id: string;
}
