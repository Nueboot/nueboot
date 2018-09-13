import { Router } from '@reach/router';
import React from 'react';

import Boot from '../Boot';
import Boots from '../Boots';
import Home from '../Home';

const App: React.SFC = () => (
  <Router>
    <Home default path="/" />
    <Boots path="/boots" />
    <Boot path="/boots/:bootId" />
  </Router>
);

export default App;
