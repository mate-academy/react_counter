/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="d-flex justify-content-center w-100">
        <Counter />
      </div>
    );
  }
}

export default App;
