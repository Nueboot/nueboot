import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import sessionReducer from './Session/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  session: sessionReducer,
});

export default rootReducer;
