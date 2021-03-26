export interface AuthState {
  data: object | null;
  token: string | null;
}

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUp {
  email: string;
  password: string;
}