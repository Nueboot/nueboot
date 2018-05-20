import firebase from '../../lib/firebase';

export const verifyUser = () => dispatch => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        dispatch(loginSuccess());
    } else {
        dispatch(logoutUser());
    }
  });
};

export const loginUser = (type: ('login'|'signup'), user) => dispatch => {
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
  readonly type: 'SESSION.LOGIN_ERROR';
  readonly payload: {
    error: string,
  };
}

export const sessionError: (err: string) => LoginErrorAction = error => ({
  payload: {
    error,
  },
  type: 'SESSION.LOGIN_ERROR',
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
