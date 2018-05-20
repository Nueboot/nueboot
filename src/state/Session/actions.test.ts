jest.mock('lib/firebase');

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase from '../../lib/firebase';
import {
  LoginErrorAction,
  loginSuccess,
  LoginSuccessAction,
  loginUser,
  logoutUser,
  sessionError,
  signOutSuccess,
  SignOutSuccessAction,
  verifyUser,
} from './actions';
import { LoginInfo } from './types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Session Actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  describe('.loginSuccess', () => {
    let action: LoginSuccessAction;
    beforeEach(() => {
      action = loginSuccess();
    });

    it('creates the correct login success action type', () => {
      expect(action.type).toBe('SESSION.LOGIN_SUCCESS');
    });
  });

  describe('.sessionError', () => {
    let action: LoginErrorAction;
    beforeEach(() => {
      action = sessionError('invalid email');
    });

    it('creates the correct login success action type', () => {
      expect(action.type).toBe('SESSION.ERROR');
    });
  });

  describe('.signOutSuccess', () => {
    let action: SignOutSuccessAction;
    beforeEach(() => {
      action = signOutSuccess();
    });

    it('creates the correct login success action type', () => {
      expect(action.type).toBe('SESSION.SIGNOUT_SUCCESS');
    });
  });

  describe('.loginUser', () => {
    let user: LoginInfo;

    beforeEach(() => {
      user = {
        email: 'email@example.com',
        password: 'abc123',
      };
    });
    describe('logging in', () => {
      beforeEach(() => {
        store.dispatch(loginUser('login', user));
      });

      it('creates the correct login success action type', () => {
        expect(store.getActions()[0].type).toBe('SESSION.ERROR');
      });
    });

    describe('signing up', () => {
      beforeEach(() => {
        store.dispatch(loginUser('signup', user));
      });

      it('creates the correct login success action type', () => {
        expect(store.getActions()[0].type).toBe('SESSION.ERROR');
      });
    });
  });

  describe('.verifyUser', () => {
    describe('when a user exists', () => {
      beforeEach(() => {
        jest.spyOn(firebase, 'auth').mockReturnValue({
          onAuthStateChanged: jest.fn().mockResolvedValue('user'),
        });
        store.dispatch(verifyUser());
      });

      it('dispatches a login user action', () => {
        expect(store.getActions()).toEqual([]);
      });
    });

    describe('when a user exists', () => {
      beforeEach(() => {
        jest.spyOn(firebase, 'auth').mockReturnValue({
          onAuthStateChanged: jest.fn().mockRejectedValue('user'),
        });
        store.dispatch(verifyUser());
        store.dispatch(verifyUser);
      });

      it('dispatches a logout user action', () => {
        expect(store.getActions()).toEqual([]);
      });
    });
  });

  describe('.logoutUser', () => {
    beforeEach(() => {
      store.dispatch(logoutUser());
    });

    it('dispatches a logout action', () => {
      expect(store.getActions()[0].type).toBe('SESSION.ERROR');
    });
  });
});
