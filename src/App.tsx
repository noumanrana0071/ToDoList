import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import ToDo from 'components/ToDo';

const App = () => {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
};

export default App;
