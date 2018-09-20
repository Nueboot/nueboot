import { BootsState } from './Boots/types';
import { SessionState } from './Session/types';

export interface State {
  session: SessionState;
  boots: BootsState;
}
