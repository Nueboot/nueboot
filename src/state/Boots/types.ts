import { BootInfo } from 'api/types';

export interface BootsState {
  readonly boots: BootInfo[];
  readonly loading: boolean;
}
