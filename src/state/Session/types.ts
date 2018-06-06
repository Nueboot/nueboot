import { FirebaseError } from 'firebase';

export interface SessionState {
  error?: FirebaseError | null;
  loggedIn: boolean;
  pending: boolean;
}
