import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import modalReducer from './Modal/reducer';
import sessionReducer from './Session/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  session: sessionReducer,
  modal: modalReducer,
});

export default rootReducer;
