import React from 'react';
import './App.scss';

type State = {
  count: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  addToCounter = (num = 1) => {
    this.setState(({ count }) => ({
      count: count + num,
    }));
  };

  increase = () => {
    this.setState(({ count }) => ({
      count: count + (count % 5 === 0 ? 101 : 1),
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>{`Count: ${count}`}</h1>
        <button type="button" onClick={() => this.addToCounter()}>Add 1</button>
        <button type="button" onClick={() => this.addToCounter(100)}>Add 100</button>
        <button type="button" onClick={() => this.increase()}>Increase</button>
      </>
    );
  }
}

export default App;
