import { LoginErrorAction, LoginSuccessAction, SignOutSuccessAction } from './actions';

export const initialSessionState = {
  error: '',
  loggedIn: false,
};

type SessionActions = LoginSuccessAction | LoginErrorAction | SignOutSuccessAction;

const SessionReducer = (state = initialSessionState, action: SessionActions) => {
  switch (action.type) {
    case 'SESSION.LOGIN_SUCCESS':
      return Object.assign({}, {
        loggedIn: true,
      });
    case 'SESSION.SIGNOUT_SUCCESS':
      return Object.assign({}, {
        loggedIn: false,
      });
    case 'SESSION.LOGIN_ERROR':
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default SessionReducer;
