import React from 'react';
import styled from 'styled-components';

import './App.css';

import { User } from 'firebase';
import Header from '../Header';
import Routes from '../Routes';
import withAuthentication from '../Session/withAuthentication';

const StyledApp = styled.div`
  font-family: 'Heebo', 'Helvetica', sans-serif;
  margin: 0;
  padding: 0;
`;

export interface AppProps {
  readonly authUser: User | null;
}

export const App: React.SFC<AppProps> = () => (
  <StyledApp className="app">
    <Header />
    <Routes />
  </StyledApp>
);

export default withAuthentication(App);
