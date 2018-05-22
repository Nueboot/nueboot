import { State } from '../types';
import { isLoggedIn, isPending } from './selectors';

describe('Session selectors', () => {
  let state: State;
  beforeEach(() => {
    state = {
      session: {
        error: '',
        loggedIn: false,
        pending: false,
      },
    };
  });

  describe('.isLoggedIn', () => {
    let selected: boolean;

    beforeEach(() => {
      selected = isLoggedIn(state);
    });

    it('gets the correct state', () => {
      expect(selected).toBe(false);
    });
  });

  describe('.isPending', () => {
    let selected: boolean;

    beforeEach(() => {
      selected = isPending(state);
    });

    it('gets the correct state', () => {
      expect(selected).toBe(false);
    });
  });
});
