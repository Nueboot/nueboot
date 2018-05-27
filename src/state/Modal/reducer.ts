import { LoginSuccessAction } from '../Session/actions';
import { CloseModalAction, OpenModalAction } from './actions';
import { ModalState } from './types';

const initialModalState = {
  modalType: null,
};

export type ModalActions = OpenModalAction | CloseModalAction | LoginSuccessAction;

const ModalReducer = (state: ModalState = initialModalState, action: ModalActions) => {
  switch (action.type) {
    case 'MODAL.OPEN_MODAL':
      return {
        modalType: action.payload.type,
      };
    case 'MODAL.CLOSE_MODAL':
      return initialModalState;
    case 'SESSION.LOGIN_SUCCESS':
      return initialModalState;
    default:
      return state;
  }
};

export default ModalReducer;
