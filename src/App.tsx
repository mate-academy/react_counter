import React from 'react';
import './App.scss';
import { Counter } from './components/Counter/Counter';

class App extends React.PureComponent {
  render() {
    return (<Counter />);
  }
}

export default App;
