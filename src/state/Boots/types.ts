import { BootInfo } from 'api/types';

export interface BootsState {
  readonly byId: BootInfo[];
  readonly loading: boolean;
}
