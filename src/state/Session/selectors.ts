import { User } from 'firebase';
import { State } from '../types';

export type IsLoggedIn = (state: State) => boolean;

export const isLoggedIn: IsLoggedIn = state => {
  return state.session.loggedIn;
};

export type IsPending = (state: State) => boolean;

export const isPending: IsPending = state => {
  return state.session.pending;
};

export type GetCurrentUser = (state: State) => User | null | undefined;

export const getCurrentUser: GetCurrentUser = state => {
  return state.session.user;
};

export type GetCurrentUserName = (state: State) => string;

export const getCurrentUserName: GetCurrentUserName = state => {
  const user = getCurrentUser(state);
  return user && user.displayName ? user.displayName : 'Nueboot User';
};
