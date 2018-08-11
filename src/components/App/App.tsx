import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'tachyons';
import BootstrapApp, { history, store } from '../../bootstrap';
import Routes from '../Routes';
import './App.css';

BootstrapApp();

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
