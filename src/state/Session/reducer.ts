import { LoginErrorAction, LoginSuccessAction, SignOutSuccessAction, VerifyingUser } from './actions';

export const initialSessionState = {
  error: '',
  loggedIn: false,
  pending: false,
};

type SessionActions = LoginSuccessAction | LoginErrorAction | SignOutSuccessAction | VerifyingUser;

const SessionReducer = (state = initialSessionState, action: SessionActions) => {
  switch (action.type) {
    case 'SESSION.LOGIN_SUCCESS':
      return Object.assign({}, {
        ...state,
        loggedIn: true,
        pending: false,
      });
    case 'SESSION.SIGNOUT_SUCCESS':
      return Object.assign({}, {
        ...state,
        loggedIn: false,
        pending: false,
      });
    case 'SESSION.PENDING':
      return Object.assign({}, {
        pending: true,
      });
    case 'SESSION.ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default SessionReducer;
