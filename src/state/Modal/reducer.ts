import { CloseModalAction, OpenModalAction } from './actions';
import { ModalState } from './types';

const initialModalState = {
  modalType: null,
};

export type ModalActions = OpenModalAction | CloseModalAction;

const ModalReducer = (state: ModalState = initialModalState, action: ModalActions) => {
  switch (action.type) {
    case 'MODAL.OPEN_MODAL':
      return {
        modalType: action.payload.type,
      };
    case 'MODAL.CLOSE_MODAL':
      return initialModalState;
    default:
      return state;
  }
};

export default ModalReducer;
