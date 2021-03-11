import React from 'react';

import { Counter } from './components/Counter';

import './App.scss';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
