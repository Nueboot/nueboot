export interface SessionState {
  error?: string;
  loggedIn: boolean;
  pending: boolean;
}

export interface LoginInfo {
  email: string;
  password: string;
}
