import React from 'react';
import './App.scss';
import Counter from './Counter';

class App extends React.Component<Props, State> {
  increase = () => {};

  render() {
    return (
      <Counter />
    );
  }
}

export default App;
