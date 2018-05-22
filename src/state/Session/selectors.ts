import { State } from '../types';

export const isLoggedIn = (state: State) => {
  return state.session.loggedIn;
};

export const isPending = (state: State) => {
  return state.session.pending;
};
