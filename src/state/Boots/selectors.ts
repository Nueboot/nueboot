import { BootInfo } from 'api/types';
import { State } from '../types';

export const allBoots = (state: State) => {
  const boots = state.boots.byId;
  return Object.keys(state.boots.byId).reduce((acc, key) => {
    const boot = boots[key];

    return [...acc, boot];
  }, []);
};

export const byId = (state: State, id: string) => allBoots(state)[id];

export const bootLoading = (state: State) => state.boots.loading;

export const getBootsByBrand = (state: State) => {
  return allBoots(state).reduce((acc, boot: BootInfo) => {
    if (acc[boot.brand]) {
      acc[boot.brand] = [...acc[boot.brand], boot];
    } else {
      acc[boot.brand] = [boot];
    }
    return acc;
  }, {});
};
