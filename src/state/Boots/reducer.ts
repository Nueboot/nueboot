import { FetchingAllBootsAction, GetAllBootsSuccessAction } from './actions';
import { BootsState } from './types';

const initialBootsState: BootsState = {
  loading: false,
  boots: [],
};

export type BootsActions = FetchingAllBootsAction | GetAllBootsSuccessAction;

const BootsReducer = (state: BootsState = initialBootsState, action: BootsActions): BootsState => {
  switch (action.type) {
    case 'BOOTS.FETCHING_ALL_BOOTS':
      return {
        ...state,
        loading: true,
      };
    case 'BOOTS.GET_BOOTS_SUCCESS':
      return {
        loading: false,
        boots: action.payload.boots,
      };
    default:
      return state;
  }
};

export default BootsReducer;
