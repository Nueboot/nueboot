import { Router } from '@reach/router';
import React from 'react';

import Home from '../Home';

const App = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default App;
