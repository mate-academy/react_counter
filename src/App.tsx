import React from 'react';
import './App.scss';

type Counter = {
  result: number,
};

class App extends React.Component<{}, Counter> {
  public state = {
    result: 0,
  };

  addOne = () => {
    this.setState((currentState) => ({
      result: currentState.result + 1,
    }));

    return 0;
  };

  add100 = () => {
    this.setState((currentState) => ({
      result: currentState.result + 100,
    }));

    return 0;
  };

  increase = () => {
    const { result } = this.state;

    if (result % 5 === 0) {
      return (this.add100() + this.addOne());
    }

    return this.addOne();
  };

  render() {
    const { result } = this.state;

    return (
      <>
        <h1>
          {`Count: ${result}`}
        </h1>
        <button type="button" onClick={this.addOne}> Add 1 </button>
        <button type="button" onClick={this.add100}> Add 100 </button>
        <button type="button" onClick={this.increase}> Icrease </button>
      </>
    );
  }
}

export default App;
