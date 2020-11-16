import React from 'react';
import Router from './router/router';
import './App.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <Button>确定</Button>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </div>
  );
}

export default App;
