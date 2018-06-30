import { BootInfo } from 'api/types';
import { getAllBoots as fetchBoots } from '../../api';

export type FetchAllBoots = () => FetchingAllBootsAction;

export interface FetchingAllBootsAction {
  readonly type: 'BOOTS.FETCHING_ALL_BOOTS';
}

export const fetchAllBoots: FetchAllBoots = () => ({
  type: 'BOOTS.FETCHING_ALL_BOOTS',
});

export type GetAllBootsSuccess = (boots: BootInfo[]) => GetAllBootsSuccessAction;

export interface GetAllBootsSuccessAction {
  readonly type: 'BOOTS.GET_BOOTS_SUCCESS';
  readonly payload: {
    boots: BootInfo[];
  };
}

export const getAllBootsSuccess: GetAllBootsSuccess = boots => ({
  type: 'BOOTS.GET_BOOTS_SUCCESS',
  payload: { boots },
});

export const getAllBoots = () => dispatch => {
  dispatch(fetchAllBoots());
  fetchBoots().then(boots => {
    dispatch(getAllBootsSuccess(boots));
  }).catch(err => {
    return err;
  });
};
