import { State } from '../types';

export type IsLoggedIn = (state: State) => boolean;

export const isLoggedIn: IsLoggedIn = state => {
  return state.session.loggedIn;
};

export type IsPending = (state: State) => boolean;

export const isPending: IsPending = state => {
  return state.session.pending;
};
