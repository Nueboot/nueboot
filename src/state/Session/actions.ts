import { auth, FirebaseError } from 'firebase';

import firebase from '../../lib/firebase';
import { AuthTypes, LoginInfo } from './types';

export const verifyUser = () => dispatch => {
  dispatch(verifyingUser());
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(loginSuccess());
    } else {
      dispatch(logoutUser());
    }
  });
};

export interface VerifyingUserAction {
  readonly type: 'SESSION.PENDING';
}

export const verifyingUser: () => VerifyingUserAction = () => ({
  type: 'SESSION.PENDING',
});

export const loginUser = (type: AuthTypes, user: LoginInfo) => dispatch => {
  try {
    const { email, password } = user;
    if (type === 'login') {
      firebase.auth().signInWithEmailAndPassword(email, password);
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password);
    }
  } catch (err) {
    dispatch(sessionError(err.code));
  }
};

export interface LoginSuccessAction {
  readonly type: 'SESSION.LOGIN_SUCCESS';
}

export const loginSuccess: () => LoginSuccessAction = () => ({
  type: 'SESSION.LOGIN_SUCCESS',
});

export interface LoginErrorAction {
  readonly type: 'SESSION.ERROR';
  readonly payload: {
    error: FirebaseError,
  };
}

export const sessionError: (err: FirebaseError) => LoginErrorAction = error => ({
  payload: {
    error,
  },
  type: 'SESSION.ERROR',
});

export const logoutUser = () => dispatch => {
  try {
    firebase.auth().signOut();
    dispatch(signOutSuccess());
  } catch (err) {
    dispatch(sessionError(err.code));
  }
};

export interface SignOutSuccessAction {
  readonly type: 'SESSION.SIGNOUT_SUCCESS';
}

export const signOutSuccess: () => SignOutSuccessAction = () => ({
  type: 'SESSION.SIGNOUT_SUCCESS',
});

export const loginWithGoogle = () => dispatch => {
  const provider = new auth.GoogleAuthProvider();
  dispatch(oauthLogin(provider));
};

export const loginWithFacebook = () => dispatch => {
  const provider = new auth.FacebookAuthProvider();
  dispatch(oauthLogin(provider));
};

export const oauthLogin = provider => dispatch => {
  firebase.auth().signInWithPopup(provider).then(res => {
    dispatch(loginSuccess());
  }).catch(err => {
    dispatch(sessionError(err));
  });
};

export interface ResetEmailSuccessAction {
  readonly type: 'SESSION.RESET_EMAIL_SUCCESS';
}

export const resetEmailSuccess: () => ResetEmailSuccessAction = () => ({
  type: 'SESSION.RESET_EMAIL_SUCCESS',
});

export const resetPassword = (email: string) => dispatch => {
  firebase.auth().sendPasswordResetEmail(email).then(() => {
    dispatch(resetEmailSuccess());
  }).catch(error => {
    dispatch(sessionError(error));
  });
};
