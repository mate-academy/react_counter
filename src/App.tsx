import React from 'react';
import './App.scss';
import { Counter } from './components/Counter';

type State = {
  currentCount: number,
};

class App extends React.Component<{}, State> {
  addOne = () => {};

  add100 = () => {};

  increase = () => {};

  render() {
    return (
      <Counter />
    );
  }
}

export default App;
