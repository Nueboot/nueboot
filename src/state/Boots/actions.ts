import { BootInfo } from 'api/types';
import { getAllBoots as fetchBoots, getBoot as fetchBoot } from '../../api';

export type FetchAllBoots = () => FetchingAllBootsAction;

export interface FetchingAllBootsAction {
  readonly type: 'BOOTS.FETCHING_BOOTS';
}

export const fetchingBoots: FetchAllBoots = () => ({
  type: 'BOOTS.FETCHING_BOOTS',
});

export type GetAllBootsSuccess = (
  boots: BootInfo[]
) => GetAllBootsSuccessAction;

export interface GetAllBootsSuccessAction {
  readonly type: 'BOOTS.RECEIVE_BOOTS';
  readonly payload: {
    boots: BootInfo[];
  };
}

export const getAllBootsSuccess: GetAllBootsSuccess = boots => ({
  type: 'BOOTS.RECEIVE_BOOTS',
  payload: { boots },
});

export const getAllBoots = () => dispatch => {
  dispatch(fetchingBoots());
  fetchBoots()
    .then(boots => {
      dispatch(getAllBootsSuccess(boots));
    })
    .catch(err => {
      return err;
    });
};

export interface GetBootAction {
  readonly type: 'BOOTS.RECEIVE_BOOT';
  readonly payload: {
    id: string;
    boot: BootInfo;
  };
}

export const getBootSuccess = (id: string, boot: BootInfo): GetBootAction => ({
  type: 'BOOTS.RECEIVE_BOOT',
  payload: {
    id,
    boot,
  },
});

export const getBoot = (id: string) => dispatch => {
  dispatch(fetchingBoots());
  fetchBoot(id)
    .then(boot => {
      dispatch(getBootSuccess(id, boot));
    })
    .catch(err => {
      throw err;
    });
};
