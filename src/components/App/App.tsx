import createHistory from 'history/createBrowserHistory';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import configureStore from '../../store/configureStore';
import Routes from '../Routes';

const history = createHistory();​
const store = configureStore(history);

(window as any).store = store;

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
