import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import ToDoContainer from 'containers/ToDoContainer';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoContainer />
      </div>
    </Provider>
  );
};

export default App;
