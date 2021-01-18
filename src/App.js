import React from 'react';
import { Counter } from './Counter';
import './App.scss';

class App extends React.Component {
  state = {}

  render() {
    return (
      <div className="App">
        <Counter />
      </div>

    );
  }
}

export default App;
