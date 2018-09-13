import { Router } from '@reach/router';
import React from 'react';

import Boots from '../Boots';
import Home from '../Home';

const App: React.SFC = () => (
  <Router>
    <Home default path="/" />
    <Boots path="/boots" />
  </Router>
);

export default App;
