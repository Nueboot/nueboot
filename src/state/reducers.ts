import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import bootsReducer from './Boots/reducer';
import sessionReducer from './Session/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  session: sessionReducer,
  boots: bootsReducer,
});

export default rootReducer;
