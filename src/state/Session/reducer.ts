import {
  LoginErrorAction,
  LoginSuccessAction,
  LogOutSuccessAction,
  VerifyingUserAction,
} from './actions';
import { SessionState } from './types';

export const initialSessionState = {
  loggedIn: false,
  pending: false,
  error: null,
  user: undefined,
};

export interface OtherAction {
  type: '';
}
export const otherAction: OtherAction = { type: '' };

type SessionActions =
  | LoginErrorAction
  | LoginSuccessAction
  | LogOutSuccessAction
  | VerifyingUserAction
  | OtherAction;

const SessionReducer = (
  state: SessionState = initialSessionState,
  action: SessionActions = otherAction
) => {
  switch (action.type) {
    case 'SESSION.LOGIN_SUCCESS':
      return Object.assign(
        {},
        {
          ...state,
          loggedIn: true,
          pending: false,
          user: action.payload.userInfo,
        }
      );
    case 'SESSION.LOGOUT_SUCCESS':
      return Object.assign(
        {},
        {
          ...state,
          loggedIn: false,
          pending: false,
          user: undefined,
        }
      );
    case 'SESSION.PENDING':
      return Object.assign(
        {},
        {
          ...state,
          pending: true,
        }
      );
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
