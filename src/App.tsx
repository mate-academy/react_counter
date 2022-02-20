import React from 'react';
import './App.scss';
import { Counter } from './Components/Counter';

class App extends React.PureComponent {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
