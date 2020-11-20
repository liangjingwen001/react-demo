import React from 'react';
import Router from './router/router';
import './App.css';
import {Provider} from 'react-redux'
import Store from './store/index'

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
