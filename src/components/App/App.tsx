import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Routes from '../Routes';

const Component = styled.div`
  font-family: 'Heebo', 'Helvetica', sans-serif;
  margin: 0;
  padding: 0;
`;

const App = () => (
  <Component>
    <Header/>
    <Routes />
  </Component>
);

export default App;
