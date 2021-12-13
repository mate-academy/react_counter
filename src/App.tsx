/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Counter />
      </div>
    );
  }
}

export default App;
