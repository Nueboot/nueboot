import { RouterState } from 'react-router-redux';

import { BootsState } from './Boots/types';
import { SessionState } from './Session/types';

export interface State {
  session: SessionState;
  boots: BootsState;
  router: RouterState;
}
