import React from 'react';
import Router from './router/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </div>
  );
}

export default App;
