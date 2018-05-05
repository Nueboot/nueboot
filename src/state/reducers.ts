import { combineReducers } from 'redux';

const sample = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sample,
});

export default rootReducer;
