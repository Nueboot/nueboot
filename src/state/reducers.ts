import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

const sample = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  router: routerReducer,
  sample,
});

export default rootReducer;
