import { Brands } from 'api/types';
import { State } from '../types';

export const allBoots = (state: State) => state.boots.byId;

export const byId = (state: State, id: string) => allBoots(state)[id];

export const byBrand = (state: State, brand: Brands) => {
  return allBoots(state).filter(boot => boot.brand === brand);
};

export const bootStatus = (state: State) => state.boots.loading;
