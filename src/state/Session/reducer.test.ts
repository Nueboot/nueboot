import { LoginErrorAction, LoginSuccessAction, SignOutSuccessAction, VerifyingUserAction } from './actions';
import sessionReducer from './reducer';
import { SessionState } from './types';

describe('Session reducer', () => {
  let state: SessionState;
  let newState: SessionState;

  beforeEach(() => {
    state = {
      error: '',
      loggedIn: false,
      pending: false,
    };
  });

  describe('with no action or state passed in', () => {
    beforeEach(() => {
      newState = sessionReducer();
    });

    it('returns the the default state', () => {
      expect(newState).toMatchSnapshot();
    });
  });

  describe('successful login', () => {
    let action: LoginSuccessAction;
    beforeEach(() => {
      action = {
        type: 'SESSION.LOGIN_SUCCESS',
      };

      newState = sessionReducer(state, action);
    });

    it('returns the new state with loggedIn set to true', () => {
      expect(newState.loggedIn).toBe(true);
    });
  });

  describe('login error', () => {
    let action: LoginErrorAction;
    beforeEach(() => {
      action = {
        payload: {
          error: 'Error',
        },
        type: 'SESSION.ERROR',
      };

      newState = sessionReducer(state, action);
    });

    it('returns the new state with the error string', () => {
      expect(newState.error).toBe('Error');
    });
  });

  describe('signout success', () => {
    let action: SignOutSuccessAction;
    beforeEach(() => {
      action = {
        type: 'SESSION.SIGNOUT_SUCCESS',
      };

      newState = sessionReducer(state, action);
    });

    it('returns the new state with logged in set to false', () => {
      expect(newState.loggedIn).toBe(false);
    });
  });

  describe('verifying user', () => {
    let action: VerifyingUserAction;
    beforeEach(() => {
      action = {
        type: 'SESSION.PENDING',
      };

      newState = sessionReducer(state, action);
    });

    it('returns the new state with pending set to true', () => {
      expect(newState.pending).toBe(true);
    });
  });
});
