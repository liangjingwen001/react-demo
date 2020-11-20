import React from 'react';
import Router from './router/router';
import {Provider} from 'react-redux'
import Store from './store/index'

class App extends React.Component {

  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <Router />
        </div>
      </Provider>
    )
  }
}

export default App;
