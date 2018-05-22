import { LoginErrorAction, LoginSuccessAction, SignOutSuccessAction, VerifyingUserAction } from './actions';
import { SessionState } from './types';

export const initialSessionState = {
  loggedIn: false,
  pending: false,
};

export interface OtherAction { type: ''; }
export const OtherAction: OtherAction = { type: '' };

type SessionActions =  LoginErrorAction | LoginSuccessAction | SignOutSuccessAction | VerifyingUserAction | OtherAction;

const SessionReducer = (state: SessionState = initialSessionState, action: SessionActions = OtherAction) => {
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
        ...state,
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
