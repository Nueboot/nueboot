import { FirebaseError } from 'firebase';
import { CloseModalAction } from '../Modal/actions';
import { LoginErrorAction, LoginSuccessAction, LogOutSuccessAction, VerifyingUserAction } from './actions';
import sessionReducer from './reducer';
import { SessionState } from './types';

describe('Session reducer', () => {
  let state: SessionState;
  let newState: SessionState;
  let error: FirebaseError;

  beforeEach(() => {
    error = {
      name:  'Error',
      message:  'Error',
      code:  'Error',
    };
    state = {
      error: {
        name:  'Error',
        message:  'Error',
        code:  'Error',
      },
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
        payload: {
          userInfo: {},
        },
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
          error,
        },
        type: 'SESSION.ERROR',
      };

      newState = sessionReducer(state, action);
    });

    it('returns the new state with the error object', () => {
      expect(newState.error).toEqual(error);
    });
  });

  describe('signout success', () => {
    let action: LogOutSuccessAction;
    beforeEach(() => {
      action = {
        type: 'SESSION.LOGOUT_SUCCESS',
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

  describe('close modal', () => {
    let action: CloseModalAction;
    beforeEach(() => {
      action = {
        type: 'MODAL.CLOSE_MODAL',
      };
      state = {
        ...state,
        error,
      };

      newState = sessionReducer(state, action);
    });

    it('clears the errors when closing the modal', () => {
      expect(newState.error).toBe(null);
    });
  });
});
