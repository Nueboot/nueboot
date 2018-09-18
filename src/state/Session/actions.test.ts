jest.mock('lib/firebase');

import firebase from 'lib/firebase';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  LoginErrorAction,
  loginSuccess,
  LoginSuccessAction,
  loginWithFacebook,
  loginWithGoogle,
  logOutSuccess,
  LogOutSuccessAction,
  logoutUser,
  sessionError,
  verifyUser,
} from './actions';

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
      action = loginSuccess({});
    });

    it('creates the correct login success action type', () => {
      expect(action.type).toBe('SESSION.LOGIN_SUCCESS');
    });
  });

  describe('.sessionError', () => {
    let action: LoginErrorAction;
    beforeEach(() => {
      action = sessionError({ code: '1', message: '1', name: '1' });
    });

    it('creates the correct login success action type', () => {
      expect(action.type).toBe('SESSION.ERROR');
    });
  });

  describe('.logOutSuccess', () => {
    let action: LogOutSuccessAction;
    beforeEach(() => {
      action = logOutSuccess();
    });

    it('creates the correct login success action type', () => {
      expect(action.type).toBe('SESSION.LOGOUT_SUCCESS');
    });
  });

  describe('.verifyUser', () => {
    describe('when a user exists', () => {
      beforeEach(() => {
        (firebase.auth as any) = jest.fn(() => ({
          onAuthStateChanged: jest.fn(cb =>
            cb({
              displayName: 'displayName',
              uid: 'uid',
            })
          ),
        }));

        store.dispatch(verifyUser());
      });

      it('dispatches a pending action', () => {
        expect(store.getActions()[0].type).toEqual('SESSION.PENDING');
      });
    });

    describe('when no user exists', () => {
      beforeEach(() => {
        (firebase.auth as any) = jest.fn(() => ({
          onAuthStateChanged: jest.fn(cb => cb(null)),
        }));

        store.dispatch(verifyUser());
      });

      it('dispatches a logout user action', () => {
        expect(store.getActions()[1].type).toEqual('SESSION.LOGOUT_SUCCESS');
      });
    });
  });

  describe('.logoutUser', () => {
    describe('when the logout is successful', () => {
      beforeEach(() => {
        (firebase.auth as any) = jest.fn(() => ({
          signOut: jest.fn(() => Promise.resolve),
        }));

        store.dispatch(logoutUser());
      });
    });

    describe('when the logout is unsuccessful', () => {
      beforeEach(() => {
        (firebase.auth as any) = jest.fn(() => ({
          signOut: jest.fn(Promise.reject),
        }));

        store.dispatch(logoutUser());
      });

      it('dispatches a logout action', () => {
        expect(store.getActions()[0].type).toBe('SESSION.ERROR');
      });
    });
  });

  describe('.loginWithGoogle', () => {
    let provider;

    describe('when signing in is successful', () => {
      beforeEach(() => {
        provider = 'Google';
        (firebase.auth as any) = jest.fn(() => ({
          GoogleAuthProvider: () => provider,
          signInWithPopup: jest.fn(() => Promise.resolve()),
        }));

        store.dispatch(loginWithGoogle());
      });
    });

    describe('when signing in is unsuccessful', () => {
      beforeEach(() => {
        provider = 'Google';
        (firebase.auth as any) = jest.fn(() => ({
          GoogleAuthProvider: () => provider,
          signInWithPopup: jest.fn(() => Promise.reject('Error')),
        }));

        store.dispatch(loginWithGoogle());
      });
    });
  });

  describe('.loginWithFacebook', () => {
    let provider;

    describe('when signing in is successful', () => {
      beforeEach(() => {
        provider = 'Facebook';
        (firebase.auth as any) = jest.fn(() => ({
          FacebookAuthProvider: () => provider,
          signInWithPopup: jest.fn(() => Promise.resolve()),
        }));

        store.dispatch(loginWithFacebook());
      });
    });

    describe('when signing in is unsuccessful', () => {
      beforeEach(() => {
        provider = 'Facebook';
        (firebase.auth as any) = jest.fn(() => ({
          FacebookAuthProvider: () => provider,
          signInWithPopup: jest.fn(() => Promise.reject('Error')),
        }));

        store.dispatch(loginWithFacebook());
      });

      it('dispatches oauthLogin with the provider', () => {
        expect(store.getActions()[0].type).toBe('SESSION.ERROR');
      });
    });
  });
});
