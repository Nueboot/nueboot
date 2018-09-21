import { BootInfo } from 'api/types';

export interface BootsState {
  readonly byId: { [key: string]: BootInfo };
  readonly loading: boolean;
}
