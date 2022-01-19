import React from 'react';
import './App.scss';
import { Counter } from './Components/Counter';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Counter />
    );
  }
}

export default App;
