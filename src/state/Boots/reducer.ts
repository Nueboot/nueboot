import {
  FetchingAllBootsAction,
  GetAllBootsSuccessAction,
  GetBootAction,
} from './actions';
import { BootsState } from './types';

const initialBootsState: BootsState = {
  loading: false,
  byId: {},
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
      const boots = action.payload.boots;
      const mappedBoots = Object.keys(boots).reduce((acc, id) => {
        acc[id] = {
          ...boots[id],
          id,
        };
        return acc;
      }, {});

      return {
        loading: false,
        byId: mappedBoots,
      };
    case 'BOOTS.RECEIVE_BOOT':
      return {
        ...state,
        loading: false,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            ...action.payload.boot,
            id: action.payload.id,
          },
        },
      };
    default:
      return state;
  }
};

export default BootsReducer;
