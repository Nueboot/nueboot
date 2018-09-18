import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../state/reducers';

const preloadedState = {};

export default function configureStore(history) {
  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk))
  );
}
