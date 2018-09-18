import {
  FetchingAllBootsAction,
  GetAllBootsSuccessAction,
  GetBootAction,
} from './actions';
import { BootsState } from './types';

const initialBootsState: BootsState = {
  loading: false,
  byId: [],
};

export type BootsActions =
  | FetchingAllBootsAction
  | GetAllBootsSuccessAction
  | GetBootAction;

const BootsReducer = (
  state: BootsState = initialBootsState,
  action: BootsActions
): BootsState => {
  switch (action.type) {
    case 'BOOTS.FETCHING_BOOTS':
      return {
        ...state,
        loading: true,
      };
    case 'BOOTS.RECEIVE_BOOTS':
      return {
        loading: false,
        byId: action.payload.boots,
      };
    case 'BOOTS.RECEIVE_BOOT':
      return {
        ...state,
        loading: false,
        byId: {
          ...state.byId,
          [action.payload.id]: action.payload.boot,
        },
      };
    default:
      return state;
  }
};

export default BootsReducer;
