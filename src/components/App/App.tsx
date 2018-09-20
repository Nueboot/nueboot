import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import BootstrapApp, { history, store } from '../../bootstrap';
import AuthModal from '../AuthModal';
import Header from '../Header';
import Routes from '../Routes';

import './App.css';

BootstrapApp();

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Header />
        <Routes />
        <AuthModal />
      </div>
    </ConnectedRouter>
  </Provider>
);
