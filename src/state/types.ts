import { ModalState } from './Modal/types';
import { SessionState } from './Session/types';

export interface State {
  session: SessionState;
  modal: ModalState;
}
