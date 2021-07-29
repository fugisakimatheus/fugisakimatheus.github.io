import React from 'react';
import { Provider } from 'react-redux';

import Profile from 'pages/profile'

import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}

export default App;
