import { Router } from '@reach/router';
import React from 'react';

import Home from '../Home';

const App: React.SFC = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default App;
