/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';
import { Counter } from './Counter';

class App extends React.Component {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
