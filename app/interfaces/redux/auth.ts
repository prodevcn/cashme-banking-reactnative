export interface AuthState {
  data: object | null;
  token: string | null;
}

export interface AuthPayload {
  email: string;
  password: string;
}
