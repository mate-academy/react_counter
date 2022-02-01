/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Counter } from './Counter/Counter';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
