import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from 'store/configureStore';
​
const store = configureStore({});

(window as any).store = store;

export default class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <h1>Hello world</h1>
      </Provider>
    );
  }
}
