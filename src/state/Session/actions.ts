import { auth, FirebaseError } from 'firebase';
import firebase from '../../lib/firebase';

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
    dispatch(logOutSuccess());
  } catch (err) {
    dispatch(sessionError(err.code));
  }
};

export interface LogOutSuccessAction {
  readonly type: 'SESSION.LOGOUT_SUCCESS';
}

export const logOutSuccess: () => LogOutSuccessAction = () => ({
  type: 'SESSION.LOGOUT_SUCCESS',
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
