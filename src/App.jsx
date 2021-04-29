/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Counter } from './components/Counter';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Counter />
      </div>
    );
  }
}

export default App;
