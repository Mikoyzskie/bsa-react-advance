export interface AuthReturnType {
  token: string;
  user: User;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

export interface SiginBody {
  email: string;
  password: string;
}

export interface SignupBody {
  fullName: string;
  email: string;
  password: string;
}

export interface IError {
  statusCode: number;
  message: string;
  error: string;
}
