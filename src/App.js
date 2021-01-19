import React from 'react';
import './App.scss';
import { Counter } from './Counter/Counter';

class App extends React.Component {
  state = {}

  render() {
    return (
      <div className="container">
        <Counter />
      </div>
    );
  }
}

export default App;
