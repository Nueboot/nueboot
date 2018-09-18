import { CloseModalAction } from '../Modal/actions';
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
  user: {},
};

export interface OtherAction {
  type: '';
}
export const OtherAction: OtherAction = { type: '' };

type SessionActions =
  | LoginErrorAction
  | LoginSuccessAction
  | LogOutSuccessAction
  | VerifyingUserAction
  | OtherAction
  | CloseModalAction;

const SessionReducer = (
  state: SessionState = initialSessionState,
  action: SessionActions = OtherAction
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
    case 'MODAL.CLOSE_MODAL':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export default SessionReducer;
