import React from 'react';
import './App.scss';

import { Counter } from './components/Counter';

class App extends React.Component {
  state = {};

  render() {
    return (
      <Counter />
    );
  }
}

export default App;
