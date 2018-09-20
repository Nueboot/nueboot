import { FirebaseError, User } from 'firebase';

export interface SessionState {
  error?: FirebaseError | null;
  loggedIn: boolean;
  pending: boolean;
  user?: User;
}
