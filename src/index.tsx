import React from 'react';
import { render } from 'react-dom';

import App from 'components/App';
import 'typeface-heebo';

const root = document.querySelector('#root');

render(<App />, root);

if (module.hot) {
  module.hot.dispose(() => {
    // module is about to be replaced
  });
  module.hot.accept(() => {
    // module or one of its dependencies was just updated
  });
}
