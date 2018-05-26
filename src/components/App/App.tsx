import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import 'typeface-heebo';

import { verifyUser } from 'state/Session/actions';
import 'tachyons/css/tachyons.min.css';
import configureStore from '../../store/configureStore';
import Routes from '../Routes';
import './normalize.css';

const history = createHistory();​
const store = configureStore(history);

store.dispatch(verifyUser());

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}
