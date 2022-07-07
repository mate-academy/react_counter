import React from 'react';
import './App.scss';
import { Counter } from './Components/Counter/Counter';

class App extends React.Component {
  state = {};

  render() {
    return <Counter />;
  }
}

export default App;
