import { BootsState } from './Boots/types';
import { ModalState } from './Modal/types';
import { SessionState } from './Session/types';

export interface State {
  session: SessionState;
  modal: ModalState;
  boots: BootsState;
}
