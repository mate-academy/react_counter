import React from 'react';
import './App.scss';
import { Counter } from './component/Counter/index';

class App extends React.Component {
  state: Readonly<{}> = {};

  render() {
    return (
      <div className="app">
        <Counter />
      </div>
    );
  }
}

export default App;
